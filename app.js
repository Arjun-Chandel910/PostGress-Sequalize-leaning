// index.js
require("dotenv").config();
const express = require("express");
const authRoute = require("./route/auth_route.js");

const app = express();

// Middleware
app.use(express.json()); // parse JSON bodies

app.use("/api/v1/auth", authRoute);
// Basic route

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!" });
});

// Start server
app.listen(process.env.APP_PORT, () => {
  console.log(`Server running on http://localhost:${process.env.APP_PORT}`);
});
