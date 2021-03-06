import session from "express-session";
import connectMongo from "connect-mongo";


let MongoStore = connectMongo(session);
/**
 * this variable is where save session, in this case is mogoDb
 */

let sessionStore = new MongoStore({
  url: `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  autoReconnect: true, 
  autoRemove: "native" //khi cookie het han se xoa' di (mac dinh nen ko can khai bao)

})

/**
 * config session for app
 * @param {*} app
 */
let configSession = (app) => {
  app.use(session({
    key: "express.sid",
    secret: "mySecret",
    store: sessionStore,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 86400000 //1 day

    }
  }));
};

module.exports = configSession;