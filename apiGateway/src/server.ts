import dotenv from 'dotenv';

dotenv.config();
import app from './app';
import appLogger from './utils/appLogger';

const port = process.env.PORT || 4000;

app.listen(port, () => {
  appLogger.info(`Server is running on port ${port}`);
});