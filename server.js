const express = require("express");
const mongoose = require("mongoose");
const Task = require("./api/models/todoListModel"); //created model loading here
const bodyParser = require("body-parser");
const todoRouter = require("./api/routes/todoListRoutes"); //importing route

const user = "danip293";
const password = "lillos99";

const port = process.env.PORT || 3000;
const app = express();
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose
  .connect(
    `mongodb+srv://${user}:${password}@cluster0.vcanv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(todoRouter); //register the route
app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);

console.log("todo list RESTful API server started on: " + port);
