const express = require("express");
const {
  UserController,
  Register,
  Login,
  UpdateProfilePic
} = require("../controller/userController");
const checkToken = require("../middleware/checkToken");
const { CreatePost } = require("../controller/postController");
const router = express.Router();

router.route("/").get(checkToken, UserController);
// router.route("/dashboard").get(checkToken,verifyJwt)
router.route('/profilePic').put(checkToken,UpdateProfilePic)
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/posts").post(CreatePost);
// router.route()

module.exports = router;
