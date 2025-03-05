import cron from "node-cron";
import { storeData } from "./storeData"; // Ensure storeData is properly exported in storeData.ts

console.log("Cron job initialized...");

// Schedule the job to run every hour
cron.schedule("0 * * * *", async () => {
  console.log("Running scheduled data fetch...");
  try {
    await storeData();
    console.log("Data fetched and stored successfully.");
  } catch (error) {
    console.error("Error in cron job:", error);
  }
});

console.log("Cron job is running every hour.");

