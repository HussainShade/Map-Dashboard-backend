const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");

// Dashboard API - Requires Authentication
router.get("/", authenticateToken, async (req, res) => {
  try {
    const cards = [
      { id: 1, title: "Chennai, Tamil Nadu", center: [13.103499652696874, 80.26351431928425] }, 
      { id: 2, title: "Pune, Maharashtra", center: [18.531706643399477, 73.85058596481154] }, 
      { id: 3, title: "Syncthreads Computing Pvt Ltd", center: [18.558934362498388, 73.79640344815269] }
    ];
    
    res.status(200).json(cards);
  } catch (error) {
    console.error("Error in Dashboard API:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
