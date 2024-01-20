const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const fs = require("fs");

const UserController = async (req, res) => {
  const authorizedData = req.user;
  const { profilePic } = await userModel.findOne({ _id: authorizedData.id });
  if (profilePic) {
    const imageBuffer = fs.readFileSync(profilePic);
    const imageBase64 = imageBuffer.toString("base64");
    authorizedData.profilePic = `data:image/png;base64,${imageBase64}`;
  } else {
    authorizedData.profilePic = "";
  }
  return res.status(200).json({
    message: "Successful log in",
    authorizedData,
  });
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

  const loginToken = jwt.sign(
    {
      id: existingUser._id,
      username: existingUser.username,
      name: existingUser.name,
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

const UpdateProfilePic = async (req, res) => {
  const { username } = req.user;
  const profilePic = req.files.profilePic;
  const { name } = profilePic;
  const uploadFilePath = path.join(
    __dirname,
    "..",
    "uploads",
    `${uuidv4()}${path.extname(name)}`
  );
  const updatedUser = await userModel.updateOne(
    { username: username },
    { profilePic: uploadFilePath }
  );
  if (!updatedUser) {
    return res.status(500).json({ message: "server error" });
  }
  profilePic.mv(uploadFilePath, (error) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        message: "can't upload file. Please try again",
      });
    }
    return res.status(200).json({ message: "file uploaded successfully" });
  });
};

module.exports = { UserController, Register, Login, UpdateProfilePic };
