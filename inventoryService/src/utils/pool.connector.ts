import { Pool } from "pg";
import inventoryLogger from "./inventory.logger";

const PoolConnector = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

const retry = async <T>(fn: () => Promise<T>, retries: number = 5, delay: number = 5000): Promise<T|undefined> => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i < retries - 1) {
        console.error(`Attempt ${i + 1} failed: ${error}. Retrying in ${delay / 1000} seconds...`);
        await new Promise(res => setTimeout(res, delay));
      } else {
        throw error;
      }
    }
  }
};

const queryWithRetry = (query: string, successMessage: string, errorMessage: string) => {
  return retry(() => {
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
  }, 5, 5000);
};

const connectWithRetry = () => queryWithRetry('SELECT NOW();', '[Database connection]: Connected correctly to Plumbit Inventory PostgreSQL database', 'Error connecting to the PostgreSQL database: ');

connectWithRetry().catch(error => {
  inventoryLogger.error(`Error connecting to the PostgreSQL database: ${error}`);
});

export const queryPromise = queryWithRetry;
export default PoolConnector;