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

export { createSession };
