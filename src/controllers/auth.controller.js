import { getUser } from "../services/user.service.js";
import ApiResponse from "../utils/ApiResponse.js";
import { createSession } from "../services/session.service.js";
import ApiError from "../utils/ApiError.js";

const loginController = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.json(new ApiError(400, "Username and password are required"));
  const user = await getUser(username, password);
  if (!user) {
    return res.json(new ApiResponse(401, "Username or Password Incorrect"));
  }
  // set session cookie
  try {
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 day expiry

    const sessionId = await createSession(user, expires);
    if (!sessionId) {
      return res.json(new ApiError(500, "Failed to create session"));
    }
    res
      .cookie("sessionId", sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        expires: expires,
      })
      .json(new ApiResponse(200, "Login Successful", { sessionId }));
  } catch (error) {
    console.error("Error creating session:", error);
    return res.json(new ApiResponse(500, "Internal Server Error"));
  }
};

const logoutController = (req, res) => {
  res.clearCookie("sessionId").json(new ApiResponse(200, "Logout Successful"));
};

export { loginController, logoutController };