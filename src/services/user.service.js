import db from "../models/index.js";
import verifyHash from "./verifyHash.service.js";
const getUser = async (username, password) => {
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
  console.log("INFO:User password not matched");
  return null;
};
export { getUser };
