// eslint-disable-next-line no-undef
const fs = require("fs");
// eslint-disable-next-line no-undef
const path = require("path");
// eslint-disable-next-line no-undef
const processExcelData = require("./utils/excelDataProcessor");

const filePaths = [
  path.join(__dirname, "ヘッダデータ.xlsx"),
  path.join(__dirname, "品番ピック.xlsx"),
];

// const sheetName = "未納履歴ヘッダ_D";

async function initialize() {
  filePaths.forEach(async (filePath) => {
    try {
      console.log(`Starting Excel processing for file: ${filePath}`);
      const processedData = await processExcelData(
        filePath,
        filePaths.indexOf(filePath)
      );
      console.log(`Excel processing complete. Writing to JSON file...`);
      fs.writeFileSync(
        // eslint-disable-next-line no-undef
        path.join(
          __dirname,
          `processedData${path.basename(filePath, ".xlsx")}.json`
        ),
        JSON.stringify(processedData, null, 2),
        "utf8"
      );

      console.log(
        `Data processing complete. Results stored in ${path.join(
          // eslint-disable-next-line no-undef
          __dirname,
          `processedData${path.basename(filePath, ".xlsx")}.json`
        )}`
      );
      console.log(`Number of rows processed: ${processedData.length}`);
    } catch (error) {
      console.error("Error processing Excel data:", error);
    }
  });
}
initialize();

var cron = require("node-cron");

// cron.schedule("0 1 * * *", () => {
//   initialize();
// });
