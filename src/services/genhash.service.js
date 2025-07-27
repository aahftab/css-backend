import argon2 from "argon2";

const genHash = async (text) => {
  try {
    const hash = await argon2.hash(text);
    return hash;
  }
  catch (error) {
    console.error("Error generating hash:", error);
    throw new Error("Hash generation failed");
  }
}

export default genHash;