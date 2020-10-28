var express = require("express");
import ConnectDB from "./config/connectDB";
import ContactModel from "./models/contact.model";

var app = express();

//connect to MongoDB
ConnectDB();

// var hostname = "localhost";
// var port = 8017;

app.get("/test_database", async(req, res) => {
  try {
    let item = {
      userID: "214124214",
      contactID: "akjvjasviasoicaio",

    };
    let contact = await ContactModel.createNew(item);
    res.send(contact);
  }catch(err) {
    console.log(err);
  }

});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Hello Gacon, I' am running at ${process.env.APP_HOST}:${process.env.APP_PORT}/`);
});
