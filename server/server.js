/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const tableRoutes = require("./routes/tableRoutes");
const editFormRoutes = require("./routes/editFormRoutes");
const hinbanTableRoutes = require("./routes/hinbanTableRoutes");
const compression = require("compression");

const PORT = process.env.PORT || 3001;
const ip = process.env.IP || "10.190.114.40";
const app = express();

app.use(cors());
app.use(compression());

app.use("/api", tableRoutes);
app.use("/api", editFormRoutes);
app.use("/api", hinbanTableRoutes);

app.listen(PORT, ip, () => {
  console.log(`Server listening on http://${ip}:${PORT}`);
});

app.use = (err, req, res) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
};

// "@mui/base": "^5.0.0-beta.40",
// "@mui/lab": "^5.0.0-alpha.170",
// "@mui/material": "^5.15.21",
// "@mui/styles": "^5.15.21",
