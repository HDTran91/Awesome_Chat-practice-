import passport from "passport";
import passportGoogle from "passport-google-oauth2";
import UserModel from "./../../models/user.model";
import {transErrors,transSuccess} from "./../../../lang/vi";

let GoogleStrategy = passportGoogle.Strategy;
let ggAppId = process.env.GG_APP_ID;
let ggAppSecret = process.env.GG_APP_SECRET;
let ggCallbackUrl = process.env.GG_CALLBACK_URL;

/**
 * valid user account type: facebook
 */

 let initPassportGoogle = () => {
   passport.use(new GoogleStrategy({
     clientID: ggAppId,
     clientSecret: ggAppSecret,
     callbackURL: ggCallbackUrl,
     passReqToCallback: true,
 
   }, async (req, accessToken, refreshToken, profile, done)=>{
      try {
        let user = await UserModel.findByGoogleUid(profile.id);
        if(user) {
          return done(null,user,req.flash("success",transSuccess.loginSuccess(user.username)));
        }
        console.log(profile);
        let newUserItem = {
          username: profile.displayName,
          gender: profile.gender,
          local: {isActive: true},
          google: {
            uid: profile.id,
            token: accessToken,
            email: profile.emails[0].value
          }
        };
        
        let newUser = await UserModel.createNew(newUserItem);
        return done(null,newUser,req.flash("success",transSuccess.loginSuccess(newUser.username)));
        
        
        


      }catch(error){
        console.log(error);
        return done(null, false, req.flash("errors",transErrors.server_error))
      }
   }));

   // saven user id in session

   passport.serializeUser((user,done)=>{
    done(null, user._id);
   });
   passport.deserializeUser((id, done)=>{
    UserModel.findUserById(id)
    .then(user => {
      return done(null, user);
    }).catch(error =>{
      return done(error, null);
    })
   })
   
 };

 module.exports = initPassportGoogle;