// utils/logger.js
import { createLogger, format, transports } from "winston";
const { combine, timestamp, printf, colorize, errors } = format;

const logFormat = printf(info => {
  let log = `${info.timestamp} ${info.level}: ${info.message}`;

  if (info.stack) {
    log = `${log}\n${info.stack}`;
  }
  if (info.errors && Array.isArray(info.errors)) {
    const errorDetails = JSON.stringify(info.errors, null, 2);
    log = `${log}\nError Details: ${errorDetails}`;
  }

  return log;
});

const logger = createLogger({
  level: "silly", // default level
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    errors({ stack: true }), // capture stack trace
    logFormat
  ),
  transports: [
    new transports.Console({
      format: combine(colorize(), logFormat),
      level: "silly",
    }),
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" }),
  ],
  exceptionHandlers: [
    new transports.Console({ handleExceptions: true }),
    new transports.File({ filename: "logs/exceptions.log" }),
  ],
  rejectionHandlers: [
    new transports.Console({ handleRejections: true }),
    new transports.File({ filename: "logs/rejections.log" }),
  ],
});

export default logger;
