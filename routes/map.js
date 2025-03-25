const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");

// Fixed dashboard locations
const dashboardCards = [
  { id: 1, title: "Chennai, Tamil Nadu", center: [13.103499652696874, 80.26351431928425] }, 
  { id: 2, title: "Pune, Maharashtra", center: [18.531706643399477, 73.85058596481154] }, 
  { id: 3, title: "Syncthreads Computing Pvt Ltd", center: [18.558934362498388, 73.79640344815269] }
];

// Map View API - Returns location details based on card ID
router.get("/:id", authenticateToken, (req, res) => {
  try {
    const cardId = parseInt(req.params.id, 10); // Convert ID to integer
    const location = dashboardCards.find(card => card.id === cardId);

    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }

    // Construct response based on the selected location
    const mapData = {
      center: { lat: location.center[0], lng: location.center[1] },
      zoom: 10, // Set a higher zoom level to focus on the city
      title: location.title
    };

    res.status(200).json(mapData);
  } catch (error) {
    console.error("Error fetching map data:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
