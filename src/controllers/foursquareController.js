const axios = require("axios");
require("dotenv").config();

const FSQ_BASE = process.env.FSQ_BASE_URL;
const FSQ_KEY = process.env.FSQ_API_KEY;

const headers = {
  "Authorization": FSQ_KEY,
  "accept": "application/json"
};

// 🔍 Place Search
exports.searchPlaces = async (req, res) => {
  try {
    const { query, ll, radius } = req.query;
    const response = await axios.get(`${FSQ_BASE}/places/search`, {
      headers,
      params: { query, ll, radius }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✨ Autocomplete
exports.autocomplete = async (req, res) => {
  try {
    const { query, ll } = req.query;
    const response = await axios.get(`${FSQ_BASE}/autocomplete`, {
      headers,
      params: { query, ll }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔗 Suggest Merge
exports.suggestMerge = async (req, res) => {
  try {
    const { name, address } = req.query;
    const response = await axios.get(`${FSQ_BASE}/suggest-merge`, {
      headers,
      params: { name, address }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
