import React from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const DisplayPosts = () => {
  const { Data } = useContext(AuthContext);

  const FetchPosts = async () => {
    try {
        const posts = await axios('http://localhost:3000/user/posts',{
            method:'GET',
            headers:{
                "Content-Type": "application/json",
                'username': Data[0].username
            }
        })
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="displayPosts">
      {user.posts.map(({ postIndex, caption, createdAt, postMediaPath }) => {
        return (
          <div key={postIndex}>
            <div>{caption}</div>
            <div>{createdAt}</div>
            <img src={postMediaPath} alt="logo" />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
