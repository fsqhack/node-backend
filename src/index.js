require("dotenv").config(); // must be at top

const app = require("./app");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log("Loaded env keys:", {
    FSQ_API_KEY: process.env.FSQ_API_KEY ? "✅ set" : "❌ missing",
    FSQ_BASE_URL: process.env.FSQ_BASE_URL,
  });
});
