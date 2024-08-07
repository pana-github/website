const XLSX = require("xlsx");
const path = require("path");

async function processExcelData(filePath, index) {
  try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false });
    const headers = data[0];
    const rows = data.slice(1);
    const dataMap = new Map();
    rows.forEach((row) => {
      // const id = `${row[7] ? row[7].replace(/[ \u3000]/g, "") : row[7]}／${
      //   row[5]
      // }_${row[11]}`;
      const idString = [
        `${row[7] ? row[7].replace(/[ \u3000]/g, "") : row[7]}／${row[5]}_${
          row[11]
        }`,
        `${row[3]}`,
      ];
      const id = idString[index];
      const currentData = {
        id: id,
        data: Object.fromEntries(
          headers.map((header, index) => [header, row[index] || ""])
        ),
      };
      if (!dataMap.has(id) || isNewer(currentData, dataMap.get(id))) {
        dataMap.set(id, currentData);
      }
    });

    return {
      headers: headers,
      data: Array.from(dataMap.values()),
    };
  } catch (error) {
    throw new Error(`Error processing Excel data: ${error.message}`);
  }
}

function isNewer(currentData, existingData) {
  const currentDate = new Date(currentData.data["注文登録日"]);
  const existingDate = new Date(existingData.data["注文登録日"]);

  if (isNaN(currentDate.getTime()) || isNaN(existingDate.getTime())) {
    return currentData.data["注文登録日"] > existingData.data["注文登録日"];
  }

  return currentDate > existingDate;
}

module.exports = processExcelData;

// const XLSX = require("xlsx");
// const {
//   Worker,
//   isMainThread,
//   parentPort,
//   workerData,
// } = require("worker_threads");
// const path = require("path");

// const parsedDataCache = new Map();

// function processExcelData(filePath) {
//   if (parsedDataCache.has(filePath)) {
//     return Promise.resolve(parsedDataCache.get(filePath));
//   }

//   if (isMainThread) {
//     return new Promise((resolve, reject) => {
//       const worker = new Worker(__filename, {
//         workerData: { filePath },
//       });
//       worker.on("message", (result) => {
//         if (result.error) {
//           reject(new Error(result.error));
//         } else {
//           resolve(result.data);
//         }
//       });
//       worker.on("error", reject);
//       worker.on("exit", (code) => {
//         if (code !== 0) {
//           reject(new Error(`Worker stopped with exit code ${code}`));
//         }
//       });
//     });
//   } else {
//     try {
//       const result = parseExcelFile(workerData.filePath);
//       parentPort.postMessage({ data: result });
//     } catch (error) {
//       parentPort.postMessage({ error: error.message });
//     }
//   }
// }

// function parseExcelFile(filePath) {
//   const workbook = XLSX.readFile(filePath);
//   const sheetName = workbook.SheetNames[0];
//   const worksheet = workbook.Sheets[sheetName];

//   const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false });
//   const headers = data[0];
//   const rows = data.slice(1);

//   const processedData = rows.map((row, index) => {
//     const rowData = {};
//     headers.forEach((header, i) => {
//       rowData[header] = row[i] || "";
//     });
//     return { id: index + 1, data: rowData };
//   });

//   parsedDataCache.set(filePath, processedData);
//   console.log(
//     `Processed ${processedData.length} rows of data from ${path.basename(
//       filePath
//     )}`
//   );
//   return processedData;
// }

// module.exports = processExcelData;
