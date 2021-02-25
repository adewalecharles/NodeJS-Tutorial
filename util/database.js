// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = () => {
//   MongoClient.connect("mongodb+srv://adewalecharles:myno08171334029@cluster0.aehg7.mongodb.net/shop?retryWrites=true", { useNewUrlParser: true })
//     .then((client) => {
//       console.log("Connected!");
//       _db = client.db();
//       callback();
//     })
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// };

// const getDb = () => {
//   if (_db) {
//     return _db;
//   }
//   throw "No database found!";
// };

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://adewalecharles:myno08171334029@cluster0.aehg7.mongodb.net/shop?retryWrites=true"
  )
    .then((client) => {
      console.log("Connected!!!");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
