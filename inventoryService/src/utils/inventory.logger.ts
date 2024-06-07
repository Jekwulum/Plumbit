import logger from "pino";
import dayjs from "dayjs";

const inventoryLogger = logger({
  transport:
    { target: 'pino-pretty' },
  level: 'info',
  base: {
    pid: false
  },
  timestamp: () => `,"time":"${dayjs().format()}"`
});

export default inventoryLogger;