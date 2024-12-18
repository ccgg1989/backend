import {format, createLogger, transports} from "winston";
const {combine, timestamp, label, printf } = format;
const CATEGORY = "logger format";

const customFormat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
    level: "debug",
    format: combine(label({ label: CATEGORY }), timestamp(), customFormat),
    transports: [new transports.Console()],
  });

export default logger;