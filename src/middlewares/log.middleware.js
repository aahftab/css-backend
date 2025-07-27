import logger from "../utils/logger.js";
const logMiddleware = (req, res, next) => {
  logger.http(`${req.method} ${req.url}`);
  next();
}

export default logMiddleware;