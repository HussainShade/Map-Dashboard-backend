const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");

const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const mapRoutes = require("./routes/map");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(helmet()); // Secure HTTP headers
app.use(bodyParser.json());
app.use(compression()); // Optimize performance
app.use(morgan("dev")); // Log requests for debugging

// Registering API routes
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/map", mapRoutes);

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend is running..." });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
