const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const mapRoutes = require("./routes/map");

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Registering API routes
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/map", mapRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
