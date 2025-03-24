const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");

// Hardcoded Dashboard API
router.get("/", authenticateToken, (req, res) => { // Now matches /api/dashboard
  const cards = [
    { id: 1, title: "View Current Location", description: "Click to see your location on the map" },
    { id: 2, title: "India Map", description: "Click to view the map of India" },
    { id: 3, title: "Zoom Controls", description: "Click to test zoom in/out functionality" }
  ];
  res.json(cards);
});

module.exports = router;
