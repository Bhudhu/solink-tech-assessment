import { query } from "../db";

const createTable = async () => {
  try {
    await query(`
      CREATE TABLE IF NOT EXISTS weather_data (
        id SERIAL PRIMARY KEY,
        timestamp TIMESTAMPTZ DEFAULT NOW(),
        air_temp FLOAT,
        dni FLOAT,
        ghi FLOAT,
        relative_humidity FLOAT,
        surface_pressure FLOAT,
        wind_speed_10m FLOAT,
        pv_power_rooftop FLOAT
      );
    `);
    console.log("Table created successfully.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
};

createTable();
