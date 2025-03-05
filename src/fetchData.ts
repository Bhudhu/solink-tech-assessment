import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const SOLCAST_API_URL = process.env.SOLCAST_API_URL;

console.log("🔹 SOLCAST_API_URL:", SOLCAST_API_URL); // Debugging step

if (!SOLCAST_API_URL) {
  console.error("❌ ERROR: API URL is not set. Check your .env file.");
  process.exit(1);
}

export const fetchSolcastData = async () => {
  try {
    console.log("⏳ Fetching data from SOLCAST API...");
    const response = await axios.get(SOLCAST_API_URL);

    if (!response.data || !response.data.data) {
      console.error("❌ ERROR: API response is missing expected 'data' field.", response.data);
      return null;
    }

    console.log("✅ Data fetched successfully:", JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error: any) {
    console.error("❌ ERROR fetching data:", error.message);
    return null;
  }
};

// Run the function if this script is executed directly
if (require.main === module) {
  fetchSolcastData();
}
