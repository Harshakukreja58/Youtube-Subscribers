const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const bodyParser = require("body-parser");
const { Connection, allData } = require("./src/createDatabase");
const subscriberModel = require("./src/models/subscribers");

//config .env file
dotenv.config();

//can be used to connect to server
// Parse JSON bodies (as sent by API clients)

//calling database
Connection();
allData();

//rest objects
const app = express();

//to use static file we need to give permission to public folder
app.use(express.static("./public"));

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//API to render HTML file(frontend)
app.get("/", async (req, res) => {
  try {
    res.sendFile(__dirname + "./public/index.html"); //defining the route folder of the index .html and here wherever we deployed this this path will help to locate the index.html file
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//api route to get all the details of subscribers
app.get("/subscribers", async (req, res) => {
  try {
    const subscribers = await subscriberModel.find({}).select("-__v");
    console.log(subscribers);
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//api route to get subscribers by name
app.get("/subscribers/name", async (req, res) => {
  try {
    const susbcriberByName = await subscriberModel
      .find({})
      .select("-__v -subscribedDate");
    console.log(susbcriberByName);
    res.status(200).json(susbcriberByName);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//api route to get subscriber by id
app.get("/subscribers/:id", async (req, res) => {
  try {
    const subscriberByID = await subscriberModel.findById(req.params.id);
    if (!subscriberByID) {
      return res.status(400).json({ meassge: "subscriber not found" });
    } else {
      res.status(200).json(subscriberByID);
    }
  } catch (err) {
    res
      .status(400) //Error status code
      .json({
        // Error Message
        message: "subscriber not found",
      });
  }
});

//port
const PORT = 3000 || process.env.PORT;

//listening server
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`.bgGreen.white);
});
