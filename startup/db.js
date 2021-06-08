const mongoose = require("mongoose");
require('dotenv').config()

module.exports = function () {
  mongoose
    .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("MongoDBga ulanish hosil qilindi...");
    })
    .catch((err) => {
      console.error("MongoDBga ulanish vaqtida xato ro'y berdi...", err);
    });
};
