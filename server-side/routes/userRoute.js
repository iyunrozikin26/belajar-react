const Controller = require("../controllers/userController");

const userRoute = require("express").Router();

userRoute.post("/register-admin", Controller.postRegisterAdmin);
userRoute.post("/register-cust", Controller.postRegisterCust);
userRoute.post("/login", Controller.postLogin);
// userRoute.post("/login-google", Controller.googleLogin);

module.exports = userRoute;
