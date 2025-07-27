import ApiError from "../utils/ApiError.js";
const router = express.Router();

const sessionMiddleware = (req, res, next) => {
  
  next();
};

export default sessionMiddleware;