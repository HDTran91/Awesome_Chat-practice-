export const transValidation = {
  email_incorrect: "Email phai co dang example@gacon.com!",
  gender_incorrect: "Gender bi sai",
  password_incorrect: "Mat Khau phai chua 8 ki tu bao gom chu hoang , chu thuong, chu so",
  password_confirmation_incorrect: "mat khau khong trung khop",

};

export const transErrors = {

  account_in_use: "Email is already used"
}

export const transSuccess = {
  userCreated: (userEmail) => {
    return `your account <strong>${userEmail}</strong> is created, please check email to activate.`
  }

};