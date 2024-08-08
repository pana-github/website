/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const hinbanData = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "..", "processedData品番ピック.json"),
    "utf8"
  )
);

router.get("/hinban/data", async (req, res) => {
  try {
    const { limit, start, end = limit } = req.query;
    let dataToSend = Array.isArray(hinbanData.data)
      ? hinbanData.data
      : [hinbanData.data];

    const paginatedData = dataToSend.slice(start, end);

    const headers = hinbanData.headers;
    res.json({ data: paginatedData, headers, total: dataToSend.length });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
