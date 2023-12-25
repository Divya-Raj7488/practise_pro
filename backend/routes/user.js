const express = require("express");
const {UserController,Register, Login} = require("../controller/userController");
const router = express.Router();

router.route("/").get(UserController)
router.route("/register").post(Register)
router.route("/login").post(Login)

module.exports = router;
