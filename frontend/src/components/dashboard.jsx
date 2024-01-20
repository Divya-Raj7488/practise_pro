import React, { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const { Data, AuthStatus } = useContext(AuthContext);
  const [formData, setformData] = useState(new FormData());
  
  // post request for uploading profilepic.
  const HandleChange = (e) => {
    const { name, files } = e.target;
    formData.set([name], files[0]);
  };

  const PostImage = async () => {
    try {
      const response = await axios({
        method: "PUT",
        url: "http://localhost:3000/user/profilePic",
        withCredentials: true,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response) {
        setformData(new FormData());
        console.log(response);
      }
    } catch (error) {
      console.log("cannot send formdata.");
    }
  };

  if (AuthStatus == true) {
    return (
      <div className="registerContainer">
        <div className="displayUserInfo">
          <h1>Here is your dashboard</h1>
          {Data.map(({ username, id, profilePic }) => {
            return (
              <div key={id}>
                <div>{username}</div>
                <img
                  src={profilePic == "" ? "" : profilePic}
                  alt="profilePic"
                  className="profilePic"
                  width={48}
                  height={48}
                />
              </div>
            );
          })}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <input
              type="file"
              alt="profile pic"
              name="profilePic"
              onChange={HandleChange}
            />
            <button className="dpBtn" onClick={PostImage}>
              Edit
            </button>
          </div>

          <button onClick={(e) => navigate("/")}>Go to homepage</button>
        </div>
        {/* <div className="displayPosts">
          {user.posts.map(({postIndex,caption,createdAt,postMediaPath}) => {
            return (
              <div key={postIndex}>
                <div>{caption}</div>
                <div>{createdAt}</div>
                <img src={postMediaPath} alt="logo" />
              </div>
            );
          })}
        </div> */}
        {/* <DisplayPosts /> */}
        <button onClick={() => navigate("/posts")}>Create New Post</button>
      </div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Dashboard;
