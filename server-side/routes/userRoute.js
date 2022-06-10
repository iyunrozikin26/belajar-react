const Controller = require("../controllers/userController");

const userRoute = require("express").Router();
const { authentication } = require("../middlewares/auth");

userRoute.post("/register-admin", Controller.postRegisterAdmin);
userRoute.post("/register-cust", Controller.postRegisterCust);
userRoute.post("/login", Controller.postLogin);
userRoute.get("/", authentication, Controller.getUser);
// userRoute.post("/login-google", Controller.googleLogin);

module.exports = userRoute;
