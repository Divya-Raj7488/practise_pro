const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const postModel = require("../models/posts");
const Redis = require("redis");
// const redisClient = Redis.createClient();

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

const FetchPosts = async (req,res) => {
  const { username } = req.user;
  const posts = await postModel.find({ userName: username });
  if (posts.length === 0) {
    return res.status(200).json({
      message: "Create New Posts",
    });
  }
  posts.forEach((post) => {
    const imageBuffer = fs.readFileSync(post.postMediaPath);
    const imageBase64 = imageBuffer.toString("base64");
    post.postMediaPath = `data:image/png;base64,${imageBase64}`;
  });

  return res.status(200).json({ message: "Posts fetching successful", posts });
};

module.exports = { CreatePost, FetchPosts };
