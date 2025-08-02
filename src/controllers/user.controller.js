import { getUser } from "../services/user.service.js";
import ApiResponse from "../utils/ApiResponse.js";
import logger from "../utils/logger.js";

const getUserProfile = async ( req, res ) => {
  try {
    const userId = req.session.user.id;
    const user = await getUser(userId);
    if (!user) {
      return res.json(new ApiResponse(404, {}, "User not found"));
    }
    return res.json(new ApiResponse(200, { user }, "User profile retrieved successfully"));
  } catch (error) {
    logger.error("Error retrieving user profile:", error);
    return res.json(new ApiResponse(500, {}, "Internal Server Error"));
  }
}

export { getUserProfile };