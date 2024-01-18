const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const postModel = require("../models/posts");
// const Redis = require("redis")
// const redisClient = Redis.createClient()

const UserController = (req, res) => {
  res.send("hello");
};

const Register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password || password.length < 8) {
    return res
      .status(400)
      .json({ message: "please enter username and atleast 8 digit password" });
  }
  const hashedPwd = await bcrypt.hash(password, 10);
  const newUser = await userModel.create({
    username: username,
    password: hashedPwd,
  });
  if (!newUser) {
    return res.status(500).json({ message: "request failed! try again" });
  }
  return res.status(200).json({ message: "user Created successfully" });
};


const Login = async (req, res) => {
  const { username, password } = req.body;
  // authentication
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "please enter username and password" });
  }
  const existingUser = await userModel.findOne({ username: username });
  if (!existingUser) {
    return res.status(404).json({ message: "user not found" });
  }
  const isCorrectPassword = await bcrypt.compare(
    password,
    existingUser.password
  );
  if (!isCorrectPassword) {
    return res.status(401).json({ message: "unauthorized" });
  }
  const existingPosts = await postModel.find({ userName: username });
  console.log(existingPosts);

  const loginToken = jwt.sign(
    {
      username: existingUser.username,
      name: existingUser.name,
      profilePic: existingUser.profilePic,
      posts: existingPosts,
    },
    process.env.LOGIN_SECTRET_KEY,
    {
      expiresIn: "1800s",
    }
  );

  return res
    .cookie("Authorization", `Bearer ${loginToken}`, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 360000,
    })
    .status(200)
    .json({ message: "authorization successful" });
};

module.exports = { UserController, Register, Login };
