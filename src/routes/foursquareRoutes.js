const express = require("express");
const axios = require("axios");

const router = express.Router();

const FSQ_API_KEY = process.env.FSQ_API_KEY; // your Bearer token
const FSQ_BASE_URL = process.env.FSQ_BASE_URL || "https://places-api.foursquare.com";

// Axios instance
const fsqClient = axios.create({
  baseURL: FSQ_BASE_URL,
  headers: {
    accept: "application/json",
    "X-Places-Api-Version": "2025-06-17",   
    authorization: `Bearer ${FSQ_API_KEY}`, 
  },
});
// 🔍 Search
router.get("/search", async (req, res) => {
  try {
    const response = await fsqClient.get("/places/search", { params: req.query });
    res.json(response.data);
  } catch (err) {
    console.error("❌ FSQ Search error:", err.response?.data || err.message);
    res.status(err.response?.status || 500).json(err.response?.data || { error: "Something went wrong" });
  }
});

// ✍️ Autocomplete
router.get("/autocomplete", async (req, res) => {
  try {
    const response = await fsqClient.get("/autocomplete", { params: req.query });
    res.json(response.data);
  } catch (err) {
    console.error("❌ FSQ Autocomplete error:", err.response?.data || err.message);
    res.status(err.response?.status || 500).json(err.response?.data || { error: "Something went wrong" });
  }
});

// 🔀 Suggest Merge
router.get("/suggest-merge", async (req, res) => {
  try {
    const response = await fsqClient.get("/suggest-merge", { params: req.query });
    res.json(response.data);
  } catch (err) {
    console.error("❌ FSQ Suggest-merge error:", err.response?.data || err.message);
    res.status(err.response?.status || 500).json(err.response?.data || { error: "Something went wrong" });
  }
});



module.exports = router;
