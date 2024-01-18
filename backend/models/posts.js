const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    postIndex: {
      type: Number,
      required: true,
    },
    caption: {
      type: String,
      default: "",
    },
    postMediaPath: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const postModel = model("Post", PostSchema);
module.exports = postModel;
