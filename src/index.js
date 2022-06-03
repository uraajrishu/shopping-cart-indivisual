const express = require("express");
const multer = require('multer')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(multer().any())

mongoose.connect("mongodb+srv://firstDB:zwPu7dwJG0RCXU9f@cluster0.kgij2.mongodb.net/group39Database", { useNewUrlParser: true, })

  .then((result) => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));


app.use("/", route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});