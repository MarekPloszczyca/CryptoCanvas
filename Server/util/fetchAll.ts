const database = require("../src/database").getDb;

const fetchAll = async () => {
  const db = await database();
  const result = await db.collection("CryptoNames").find().toArray();
  const products = await result;
  return products;
};

module.exports = fetchAll;
