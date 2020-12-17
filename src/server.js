var express = require("express");
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";
import bodyParser from "body-parser";
import connectFlash from "connect-flash";
import configSession from "./config/session";
import passport from "passport";

//Init app
let app = express();

//connect to MongoDB
ConnectDB();

// var hostname = "localhost";
// var port = 8017;

//configSession

configSession(app);

//config view engine
configViewEngine(app);

//Enable post data for reequest
app.use(bodyParser.urlencoded({extended:true}))

//Enable flash messages

app.use(connectFlash());

// config passport js
app.use(passport.initialize());
app.use(passport.session());

//Init all routes
initRoutes(app);


app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Hello Gacon, I' am running at ${process.env.APP_HOST}:${process.env.APP_PORT}/`);
});
