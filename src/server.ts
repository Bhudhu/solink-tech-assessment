import express from "express";
import { storeData } from "./storeData";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("SOLINK Weather API is running!");
});

// Manually trigger data fetching
app.get("/fetch", async (req, res) => {
  try {
    await storeData();
    res.send("Data fetched and stored successfully.");
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

// Start the web server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
