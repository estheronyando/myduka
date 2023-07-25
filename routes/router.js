const express = require("express");

const {
    signup,
    login,
    logout,
    loginWithMobileNumber,
    isExistPhone,
    authentication,
    updateUserInfo,
    updateEmail,
  } = require("../controllers/user-controller");

const router=express.Router();  

 //User Account related routes

router.post("/accounts/signup", signup);
router.post("/accounts/login", login);
router.post("/accounts/login-with-phone", loginWithMobileNumber);
router.post("/accounts/check-phone", isExistPhone);
router.get("/accounts/authentication", authentication);
router.get("/accounts/logout", logout);
router.patch("/accounts/update-user-info", updateUserInfo);
router.patch("/accounts/update-email", updateEmail);


module.exports=router;