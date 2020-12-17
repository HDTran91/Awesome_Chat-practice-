import {validationResult} from "express-validator/check";
import {auth} from "./../services/index"
import {transSuccess} from "./../../lang/vi"

let getLoginRegister = (req, res) => {
  return res.render("auth/master",{
    errors: req.flash("errors"),
    success: req.flash("success")
  });
};

let postRegister = async (req,res) => {
  let errorArr = [];
  let successArr = [];

  // console.log(validationResult(req));
  // console.log(validationResult(req).isEmpty());
  // console.log(validationResult(req).mapped());
  // console.log("........................................");
 

  let validationErrors = validationResult(req);
  if(!validationErrors.isEmpty()) {

    let errors = Object.values(validationErrors.mapped())
    errors.forEach(item => {
      errorArr.push(item.msg);
    });
    req.flash("errors",errorArr);
    
    return res.redirect("/login-register");
  }
  try {
    let CreateUserSuccess = await auth.register(req.body.email, req.body.gender, req.body.password, req.protocol, req.get("host"))
    successArr.push(CreateUserSuccess);
    req.flash("success",successArr);
    return res.redirect("/login-register");
  } catch (error){
    errorArr.push(error);
    req.flash("errors",errorArr);
    
    return res.redirect("/login-register");
  }
  
};

let verifyAccount = async(req, res) => {
  let errorArr = [];
  let successArr = [];

  try {
    let verifySuccess = await auth.verifyAccount(req.params.token);
    successArr.push(verifySuccess);
    req.flash("success",successArr);
    return res.redirect("/login-register");
    

  }catch(error){
    errorArr.push(error);
    req.flash("errors",errorArr);
    
    return res.redirect("/login-register");
  }
};

let getLogout = (req,res) => {
  req.logout(); //remove passport user saved in session
  req.flash("success", transSuccess.logout_success);
  return res.redirect("/login-register");
};

let checkLoggedIn = (req, res, next) => {
  if(!req.isAuthenticated()) { //function cua passpord to check login or not
    return res.redirect("/login-register");
  }
  next();
};

let checkLoggedOut = (req, res, next) => {
  if(req.isAuthenticated()) { //function cua passpord to check login or not
    return res.redirect("/");
  }
  next();
};
module.exports = {
  getLoginRegister: getLoginRegister,
  postRegister: postRegister,
  verifyAccount: verifyAccount,
  getLogout: getLogout,
  checkLoggedIn: checkLoggedIn,
  checkLoggedOut: checkLoggedOut
};