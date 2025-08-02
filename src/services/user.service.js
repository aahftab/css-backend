import db from "../models/index.js";
import logger from "../utils/logger.js";
import verifyHash from "./verifyHash.service.js";
const verifyAndGetUser = async (username, password) => {
  const user = await db.User.scope("withPassword").findOne({
    where: {
      username,
    },
  });
  if (!user) {
    return null;
  }
  const matched = await verifyHash(user.hashed_password, password);
  if (matched) {
    return user;
  }
  logger.info("User password not matched");
  return null;
};

const getUser = async userId => {
  const user = await db.User.findOne({
    where: {
      id: userId,
    },
  });
  if (!user) {
    return null;
  }
  return user;
};
export { verifyAndGetUser, getUser };
