const crypto = require("crypto");

let secretKey = process.env.ENCRYPT_SECRET;
const iv = Buffer.from(process.env.ENCRYPT_IV);

while (secretKey.length < 32) {
  secretKey += " ";
}

const encryptId = (id) => {
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(secretKey),
    iv
  );
  let encrypted = cipher.update(id.toString(), "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

const decryptId = (encryptedId) => {
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(secretKey),
    iv
  );
  let decrypted = decipher.update(encryptedId, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

module.exports = { encryptId, decryptId };
