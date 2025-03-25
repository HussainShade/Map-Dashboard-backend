const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

// Hardcoded credentials
const validUser = {
  email: "syncthreads.assignment@gmail.com",
  password: "@SyncthreadsAssignment123",
};

// LOGIN API
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (email !== validUser.email || password !== validUser.password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.json({ token });
});

module.exports = router;
