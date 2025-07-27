import argon2 from "argon2";

const verifyhash = async (hash, password) => {
  try {
    const matched = await argon2.verify(hash, password);
    return matched;
  }
  catch (error) {
    console.error(error);
    throw new Error("Hash verification failed");
  }
}

export default verifyhash;