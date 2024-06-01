import logger from "pino";
import dayjs from "dayjs";

const appLogger = logger({
  transport:
    { target: 'pino-pretty' },
  level: 'info',
  base: {
    pid: false
  },
  timestamp: () => `,"time":"${dayjs().format()}"`
});

export default appLogger;