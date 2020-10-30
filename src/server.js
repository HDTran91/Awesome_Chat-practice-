var express = require("express");
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";

//Init app
let app = express();

//connect to MongoDB
ConnectDB();

// var hostname = "localhost";
// var port = 8017;

//config view engine
configViewEngine(app);

app.get("/",(req, res) => {
  return res.render("main/master");

});

app.get("/login-register",(req, res) => {
  return res.render("auth/loginRegister");

});


app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Hello Gacon, I' am running at ${process.env.APP_HOST}:${process.env.APP_PORT}/`);
});
