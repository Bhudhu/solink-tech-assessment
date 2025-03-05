import { query } from "./db";
import { fetchSolcastData } from "./fetchData";

const storeData = async () => {
  const data = await fetchSolcastData();
  if (!data) return;

  try {
    const { air_temp, dni, ghi, relative_humidity, surface_pressure, wind_speed_10m, pv_power_rooftop } = data;

    await query(
      `INSERT INTO weather_data (air_temp, dni, ghi, relative_humidity, surface_pressure, wind_speed_10m, pv_power_rooftop)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [air_temp, dni, ghi, relative_humidity, surface_pressure, wind_speed_10m, pv_power_rooftop]
    );

    console.log("Data stored successfully.");
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

storeData();
