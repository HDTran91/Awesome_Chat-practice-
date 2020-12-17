export const transValidation = {
  email_incorrect: "Email phai co dang example@gacon.com!",
  gender_incorrect: "Gender bi sai",
  password_incorrect: "Mat Khau phai chua 8 ki tu bao gom chu hoang , chu thuong, chu so",
  password_confirmation_incorrect: "mat khau khong trung khop",

};

export const transErrors = {

  account_in_use: "Email is already used",
  token_undefined: "token is not existed",
  login_failed: "Username or Password is not correct!",
  account_not_active: "Email is already registered but not active yet",
  server_error: "server has errors, please contact with our support team to fix it"
}

export const transSuccess = {
  userCreated: (userEmail) => {
    return `your account <strong>${userEmail}</strong> is created, please check email to activate.`
  },
  account_active: "activate successfully, you can login now",
  loginSuccess: (username) =>{
    
    return `hello ${username}, have a good day.`},
  logout_success: "Log out successful, have a good day"
  

};

export const transMail = {
  subject: "Awesome Chat: click to activate your account",
  template: (linkVerify) => {
    return `
    <h2>You have received this email cause you just registerd account on Awesome Chat</h2>
    <h3>Click to activate your account</h3>
    <h3><a href= "${linkVerify}" target="blank">${linkVerify}</a></h3>
    <h4>if this is misunderstanding, please ignore it. Thank you</h4>
  `},
  send_failed: "Error occurs in the process of sending email, please Contact us for support"
  
}