import path from 'path';
import { config } from 'dotenv';

config({path: path.resolve(__dirname, '../.env')});
const environment = process.env.ENVIRONMENT;

let envPath = '../development.env';
if (environment === 'docker') {
  envPath = '../docker.env';
}
config({ path: path.resolve(__dirname, envPath) });

import app from './app';
import appLogger from './utils/appLogger';

const port = process.env.PORT || 4000;

app.listen(port, () => {
  appLogger.info(`API-Gateway Server is running on port ${port}`);
});