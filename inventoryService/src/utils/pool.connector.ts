import { Pool } from "pg";
import inventoryLogger from "./inventory.logger";

const PoolConnector = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});

PoolConnector.query('SELECT NOW();', error => {
  if (error) inventoryLogger.error(`Error connecting to the database: ${error}`);
  else inventoryLogger.info(`[Database connection]: Connected correctly to Plumbit Inventory database`);
});

export const queryPromise = (query: string, successMessage: string, errorMessage: string) => {
  return new Promise((resolve, reject) => {
    PoolConnector.query(query, (err, results) => {
      if (err) {
        inventoryLogger.error(errorMessage + err);
        reject(err);
      } else {
        inventoryLogger.info(successMessage);
        resolve(results);
      }
    });
  });
};

export default PoolConnector;