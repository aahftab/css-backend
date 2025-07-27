import getUser from "../services/getUser.service.js";
import ApiResponse from "../utils/ApiResponse.js";

const loginController = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.json(new ApiError(400, "Username and password are required"))
  const user = await getUser(username, password);
  if(!user) {
    return res.json(new ApiResponse(401, "Username or Password Incorrect"))
  }
  res.json(new ApiResponse(200, "Login Successful"))
}

const logoutController = (req, res) => {
  res.clearCookie("sessionId").json(new ApiResponse(200, "Logout Successful"));
}

export {loginController, logoutController}