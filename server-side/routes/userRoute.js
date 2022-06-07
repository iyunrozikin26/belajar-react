const Controller = require("../controllers/userController");

const userRoute = require("express").Router();

userRoute.post("/register", Controller.postRegister);
userRoute.post("/login", Controller.postLogin);
// userRoute.post("/login-google", Controller.googleLogin);

module.exports = userRoute;
