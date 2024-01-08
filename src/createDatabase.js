const mongoose = require("mongoose");
const colors = require("colors");
const subscriberModel = require("./models/subscribers");
const data = require("./data");
const dotenv = require("dotenv");

//config .env
dotenv.config();

// Connect to DATABASE
const Connection = async () => {
  //i am creating a connection bewteeen databse using async await you can aslo use then and catch method

  try {
    const DataBaseUri =
      "mongodb+srv://harsha:CbYm4AVUyFsXCZNm@cluster0.ipg7pm1.mongodb.net/ytsubs" ||
      process.env.MONGO_URI;
    const Connect = await mongoose.connect(DataBaseUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DataBase Connected Sucessfully".bgGreen.white);
    return mongoose;
  } catch (error) {
    console.log(error); //if there is any error will come then it will show in the console..
  }
};

const allData = async () => {
  try {
    await subscriberModel.deleteMany({}); //first it will deelte all the data
    // console.log(connection);
    await subscriberModel.insertMany(data); //insert data
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Connection, allData };
