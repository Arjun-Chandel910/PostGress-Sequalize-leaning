// index.js
require("dotenv").config();
const express = require("express");
const authRoute = require("./route/auth.route.js");
const app = express();
const db = require("./db/models");
// Middleware
app.use(express.json()); // parse JSON bodies
db.sequelize
  .sync({ force: false }) // `force: false` prevents dropping tables on every sync
  .then(() => {
    console.log("Database synced successfully!");
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });

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
