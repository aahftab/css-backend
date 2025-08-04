import { getSession, touchSession, deleteSession } from "../services/session.service.js";
import ApiResponse from "../utils/ApiResponse.js";
import logger from "../utils/logger.js";

const sessionMiddleware = async (req, res, next) => {
  const sessionId = req.cookies.sessionId;
  if (!sessionId) {
    return res.json(new ApiResponse(404, {}, "Unauthorised Access")); 
  }
  const session = await getSession(sessionId);
  if (!session) {
    return res.json(new ApiResponse(404, {}, "Unauthorised Access")); 
  }
  if (session.expires < new Date()) {
    await deleteSession(sessionId);
    logger.info(`Session ${sessionId} expired`);
    return res.clearCookie("sessionId").json({ message: "Session expired" });
  }
  // update session
  await touchSession(sessionId);
  req.session = session;
  res.cookie("sessionId", session.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Required when sameSite is "none"
    expires: session.expires,
  });
  return next();
};

export default sessionMiddleware;
