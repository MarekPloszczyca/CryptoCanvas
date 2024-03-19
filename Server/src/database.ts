const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;


let _db: any;
const mongoConnection = async (callback: (arg: any) => void) => {
  const url =
    "mongodb+srv://Marek:test12345@cryptocanvas.bkh0xme.mongodb.net/Crypto?retryWrites=true&w=majority&appName=CryptoCanvas";
  const connection = await MongoClient.connect(url).catch((err: Error) => {
    console.log(err);
  });
  const result = await connection;
  console.log("Connected!");
 _db = result.db()
  callback(result);
};

const getDb = () => {
  if(_db){
    return _db
  }
  throw "No database found!"
}

module.exports = {mongoConnection, getDb};


