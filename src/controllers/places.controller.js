const axios = require("axios");

const FSQ_BASE = "https://api.foursquare.com/v3/places";
const apiKey = process.env.FSQ_API_KEY;

const fsqRequest = async (method, path, params = {}, data = {}) => {
  return axios({
    method,
    url: `${FSQ_BASE}${path}`,
    headers: {
      Accept: "application/json",
      Authorization: apiKey,
    },
    params,
    data,
  });
};

// --- Search & Data ---
exports.searchPlaces = async (req, res) => {
  try {
    const response = await fsqRequest("get", "/search", req.query);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
};

exports.autocomplete = async (req, res) => {
  try {
    const response = await fsqRequest("get", "/autocomplete", req.query);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
};

exports.placeDetails = async (req, res) => {
  try {
    const response = await fsqRequest("get", `/${req.params.fsq_id}`);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
};

exports.placePhotos = async (req, res) => {
  try {
    const response = await fsqRequest("get", `/${req.params.fsq_id}/photos`);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
};

exports.placeTips = async (req, res) => {
  try {
    const response = await fsqRequest("get", `/${req.params.fsq_id}/tips`);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
};

// --- Geotagging ---
exports.nearbyPlaces = async (req, res) => {
  try {
    const response = await fsqRequest("get", "/nearby", req.query);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
};

// --- Placemaker ---
exports.placemakerFeedback = async (req, res) => {
  try {
    const response = await fsqRequest("post", "/placemaker/feedback", {}, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
};

exports.placemakerSuggest = async (req, res) => {
  try {
    const response = await fsqRequest("get", "/placemaker/suggest", req.query);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
};

