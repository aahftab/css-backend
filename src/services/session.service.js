import db from "../models/index.js";
import logger from "../utils/logger.js";

const createSession = async (user, expires) => {
  try {
    const session = await db.Session.create({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      expires: expires,
    });
    return session.id;
  } catch (error) {
    logger.error(error);
    return null;
  }
};

const deleteSession = async(sessionId) => {
  try {
    const result = await db.Session.destroy({
      where: {id: sessionId}
    })
    return true;
  } catch (error) {
    logger.error(error);
    return false;
  }
}

export { createSession, deleteSession };
