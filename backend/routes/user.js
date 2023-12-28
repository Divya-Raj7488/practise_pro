const express = require("express");
const {UserController,Dashboard,Register, Login} = require("../controller/userController");
const checkToken = require("../middleware/checkToken");
const verifyJwt = require("../middleware/verifyJwt");
const router = express.Router();

router.route('/').get(UserController)
router.route("/dashboard").get(checkToken,verifyJwt)
router.route("/register").post(Register)
router.route("/login").post(Login)

module.exports = router;
