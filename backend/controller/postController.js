// const fsPromises = require("fs").promises;
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const postModel = require("../models/posts");

const CreatePost = async (req, res) => {
  const { username, caption } = req.body;
  const uploadedFile = req.files.postMedia;
  const { name } = uploadedFile;
  //check for authorization
  if (!username || !username.length) {
    console.log(req.body);
    return res.status(401).json({ message: "unauthorized" });
  }
  //create file and upload it in uploads folder
  const uploadFilePath = path.join(
    __dirname,
    "..",
    "uploads",
    `${uuidv4()}${path.extname(name)}`
  );
  uploadedFile.mv(uploadFilePath, (error) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        message: "can't upload file. Please try again",
      });
    }
  });
  //postIndex-start with one
  const existingPosts = await postModel.find({ userName: username });
  console.log(existingPosts);
  const postIndex = existingPosts.length + 1;
  //save the filepath,username,caption,postIndex
  await postModel.create({
    postIndex: postIndex,
    postMediaPath: uploadFilePath,
    caption: caption,
    userName: username,
  });
  return res.status(200).json({ message: "file upload successful" });
};

const GetPosts = async () => {
  const { username } = req.body;
  if (!username || username === "") {
    return res.status(401).json({ message: "unauthorized! access denied." });
  }
  const sendPosts = await postModel.find({ username: username });
  
};

module.exports = { CreatePost, GetPosts };
