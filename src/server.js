var express = require("express");
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";
import bodyParser from "body-parser";
import connectFlash from "connect-flash";
import configSession from "./config/session";
import passport from "passport";


let app = express();

ConnectDB();

//config session

configSession(app);

//config view engine

configViewEngine(app);

//Enable post data for request

app.use(bodyParser.urlencoded({extended: true}))

//enable flash messages

app.use(connectFlash());

//config passport js

app.use(passport.initialize());
app.use(passport.session());

initRoutes(app);

app.listen(process.env.APP_PORT,process.env.APP_HOST, () => {console.log("hello Hoang, I am running at " + process.env.APP_HOST + ":" + process.env.APP_PORT +"/")
  
  });


// import pem from "pem";
// import https from "https"; //module trong node js
// pem.createCertificate({ days: 1, selfSigned: true }, function (err, keys) {
//   if (err) {
//   throw err;
//   }
//   //Init app
// let app = express();


// //connect to MongoDB
// ConnectDB();

// // var hostname = "localhost";
// // var port = 8017;

// //configSession

// configSession(app);

// //config view engine
// configViewEngine(app);

// //Enable post data for reequest
// app.use(bodyParser.urlencoded({extended:true}))

// //Enable flash messages

// app.use(connectFlash());

// // config passport js
// app.use(passport.initialize());
// app.use(passport.session());


// //Init all routes
// initRoutes(app);
// https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(process.env.APP_PORT,process.env.APP_HOST, () => {
//   console.log("hello Hoang, I am running at " + process.env.APP_HOST + ":" + process.env.APP_PORT +"/")

// });
 
// });
