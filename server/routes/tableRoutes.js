// eslint-disable-next-line no-undef
const express = require("express");
const router = express.Router();
// eslint-disable-next-line no-undef
const fs = require("fs");
// eslint-disable-next-line no-undef
const path = require("path");

const processedData = JSON.parse(
  // eslint-disable-next-line no-undef
  fs.readFileSync(
    path.join(__dirname, "..", "processedDataヘッダデータ.json"),
    "utf8"
  )
);

router.get("/data", async (req, res) => {
  try {
    const { limit, start, end = limit } = req.query;

    let dataToSend = Array.isArray(processedData.data)
      ? processedData.data
      : [processedData.data];
    const paginatedData = dataToSend.slice(start, end);

    const headers = processedData.headers;

    res.json({ data: paginatedData, headers, total: dataToSend.length });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

router.get("/view", async (req, res) => {
  res.json(processedData);
});

router.get("/search", async (req, res) => {
  const { phoneNumber, remarks, destinationName, start, end } = req.query;

  try {
    let dataToFilter = Array.isArray(processedData.data)
      ? processedData.data
      : [processedData.data];

    // const isSearching = phoneNumber || remarks || destinationName;

    let filteredData = [];
    dataToFilter.forEach((entry) => {
      if (
        (!phoneNumber ||
          (entry.data["電話番号"] &&
            entry.data["電話番号"].includes(phoneNumber))) &&
        (!remarks ||
          (entry.data["件名備考１"] &&
            entry.data["件名備考１"].includes(remarks))) &&
        (!destinationName ||
          (entry.data["直送先名"] &&
            entry.data["直送先名"].includes(destinationName)))
      ) {
        filteredData.push({ id: entry.id, data: entry.data });
      }
    });
    // filteredData = filteredData.filter((entry) => {
    //   const phoneMatch =
    //     !phoneNumber ||
    //     (entry.電話番号 && entry.電話番号.includes(phoneNumber));
    //   const remarksMatch =
    //     !remarks || (entry.件名備考１ && entry.件名備考１.includes(remarks));
    //   const nameMatch =
    //     !destinationName ||
    //     (entry.直送先名 && entry.直送先名.includes(destinationName));

    //   return phoneMatch && remarksMatch && nameMatch;
    // });

    const startIndex = parseInt(start, 10);
    const endIndex = parseInt(end, 10);

    if (filteredData.length > 15) {
      if (startIndex < endIndex && startIndex < filteredData.length) {
        const paginatedData = filteredData.slice(startIndex, endIndex);
        res.json({ data: paginatedData, total: filteredData.length });
      }
    } else if (filteredData.length == 0) {
      res.status(200).json({ message: "No data matched the search criteria" });
      console.log("No data matched");
    } else {
      res.json({ data: filteredData, total: filteredData.length });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// eslint-disable-next-line no-undef
module.exports = router;

// // Example route to update a row of data
// router.put('/data/:rowId', (req, res) => {
//   const { rowId } = req.params;
//   const updatedData = req.body;

//   try {
//     const workbook = xlsx.readFile(filePath);
//     const sheetName = workbook.SheetNames[0]; // Assuming data is on the first sheet
//     let data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

//     // Update the row
//     data[rowId] = updatedData;

//     // Write back to the file
//     const newWorkbook = xlsx.utils.book_new();
//     const newSheet = xlsx.utils.json_to_sheet(data);
//     xlsx.utils.book_append_sheet(newWorkbook, newSheet, sheetName);
//     xlsx.writeFile(newWorkbook, filePath);

//     res.json(updatedData);
//   } catch (error) {
//     console.error('Error updating row:', error);
//     res.status(500).json({ error: 'Failed to update row' });
//   }
// });
