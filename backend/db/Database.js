const mongoose = require("mongoose");

// "mongodb://localhost:27017/show",
const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/show", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongodb is connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
