import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const SOLCAST_API_URL = process.env.SOLCAST_API_URL;

console.log("SOLCAST_API_URL:", SOLCAST_API_URL); // Debugging step

if (!SOLCAST_API_URL) {
  console.error("ERROR: API URL is not set. Check your .env file.");
  process.exit(1);
}

export const fetchSolcastData = async () => {
  try {
    console.log("Fetching data...");
    const response = await axios.get(SOLCAST_API_URL);
    console.log("Data fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

if (require.main === module) {
  fetchSolcastData();
}

