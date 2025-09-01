const express = require("express");

const router = express.Router();

// GET /api/users
router.get("/", (req, res) => {
  res.json({ message: "Get all users" });
});

// POST /api/users
router.post("/", (req, res) => {
  const { name } = req.body;
  res.json({ message: `User ${name} created` });
});

module.exports = router;
