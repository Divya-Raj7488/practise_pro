const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserController = (req, res) => {
  res.send("hello");
};

const Dashboard = (req,res) => {

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
  // existingUser.password = undefined;
  const loginToken = jwt.sign(
    { username: existingUser.username },
    process.env.LOGIN_SECTRET_KEY,
    {
      expiresIn: "1800s",
    }
  );

  return res
    .cookie(loginToken)
    .status(200)
    .json({ message: "authorization successful" });
};

module.exports = { UserController, Dashboard, Register, Login };
