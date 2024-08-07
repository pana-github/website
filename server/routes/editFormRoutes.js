/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const processedData = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "..", "processedDataヘッダデータ.json"),
    "utf8"
  )
);

router.get(`/edit/:id`, async (req, res) => {
  const { id } = req.params;
  let dataToSend = Array.isArray(processedData.data)
    ? processedData.data
    : [processedData.data];
  dataToSend = dataToSend.find((entry) => entry.id === decodeURIComponent(id));
  res.json(dataToSend);
});

module.exports = router;
