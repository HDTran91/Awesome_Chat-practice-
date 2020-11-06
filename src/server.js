var express = require("express");
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";
import bodyParser from "body-parser";

//Init app
let app = express();

//connect to MongoDB
ConnectDB();

// var hostname = "localhost";
// var port = 8017;

//config view engine
configViewEngine(app);

//Enable post data for reequest
app.use(bodyParser.urlencoded({extended:true}))

//Init all routes
initRoutes(app);


app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Hello Gacon, I' am running at ${process.env.APP_HOST}:${process.env.APP_PORT}/`);
});
