const express = require("express");
const cors = require("cors");
const app = express();
// const mysql = require("./app/services/database.js");
const questionController = require("./app/controllers/question.controller.js");
const userController = require("./app/controllers/user.controller.js");

var corsOptions = {
  // origin: "http://localhost:8081",
};

// const dbConfig = require("./app/config/db.config.js");

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.get("/hello", userController.createNewUser);
app.get("/get", userController.getUsersDetails);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
