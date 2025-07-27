import crypto from "crypto"
const getUUID = () => {
  return crypto.randomUUID();
}
export default getUUID;