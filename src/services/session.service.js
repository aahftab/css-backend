import db from "../models/index.js";
import logger from "../utils/logger.js";

const createSession = async (user, expires) => {
  try {
    const newUser = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    };
    const session = await db.Session.create({
      // enter user typeof JSONB and expiry as expiry
      user: { ...newUser },
      expires: new Date(Date.now() + parseInt(process.env.SESSION_EXPIRY)),
    });
    return session;
  } catch (error) {
    logger.error(error);
    return null;
  }
};

const getSession = async (sessionId) => {
  try {
    const session = await db.Session.findOne({
      where: { id: sessionId },
    });
    return session;
  } catch (error) {
    logger.error(error);
    return null;
  }
};

const touchSession = async (sessionId) => {
  try {
    const session = await db.Session.update(
      { expires: new Date(Date.now() + parseInt(process.env.SESSION_EXPIRY)) },
      { where: { id: sessionId } }
    );
    return session;
  } catch (error) {
    logger.error(error);
    return null;
  }
};

const deleteSession = async sessionId => {
  try {
    await db.Session.destroy({
      where: { id: sessionId },
    });
    return true;
  } catch (error) {
    logger.error(error);
    return false;
  }
};

export { createSession, getSession, touchSession, deleteSession };
