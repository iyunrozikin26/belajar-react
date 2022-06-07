const router = require("express").Router();
const moviesRoute = require("./moviesRoute");
const userRoute = require("./userRoute");

router.use("/users", userRoute);
router.use("/movies", moviesRoute);
// router.use("/movies", moviesRoute);

module.exports = router;
