const express = require("express");
const cors = require("cors");

const foursquareRoutes = require("./routes/foursquareRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/foursquare", foursquareRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("✅ Travel Assistant API is running...");
});

module.exports = app;
