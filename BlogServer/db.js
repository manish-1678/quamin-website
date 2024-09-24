const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://eshaangupta33:quamintechLLP@quamin.a5nfh9s.mongodb.net/testdb?retryWrites=true&w=majority&appName=Quamin"
    );
    console.log(`mongoDB connected`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
