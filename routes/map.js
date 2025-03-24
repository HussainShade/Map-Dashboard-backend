const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");

// Map View API
router.get("/", authenticateToken, (req, res) => {
  const mapData = {
    center: { lat: 20.5937, lng: 78.9629 }, // India's coordinates
    zoom: 4, // Initial zoom level
  };

  res.json(mapData);
});

module.exports = router;
