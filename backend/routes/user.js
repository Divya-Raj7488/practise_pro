const express = require("express");
const {
  UserController,
  Register,
  Login,
  UpdateProfilePic,
} = require("../controller/userController");
const checkToken = require("../middleware/checkToken");
const { CreatePost, FetchPosts } = require("../controller/postController");
const router = express.Router();


router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/posts").post(CreatePost);
router.route("/").get(checkToken, UserController);
router.route("/profilePic").put(checkToken, UpdateProfilePic);
router.route("/fetchposts").get(checkToken, FetchPosts);


module.exports = router;
