import React, { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [formData, setformData] = useState(new FormData());
  const [posts, setPosts] = useState([]);

  const { user, AuthStatus, loading } = useSelector((state) => state.user);

  const handleProfilePicChange = () => {
    fileInputRef.current.click();
  };
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
      }
    } catch (error) {
      console.log("cannot send formdata.");
    }
  };

  const FetchPosts = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/user/fetchposts",
        withCredentials: true,
      });
      if (Array.isArray(response.data)) {
        setPosts(response.data.posts);
      }
      setPosts([]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchPosts();
  }, []);

  if (AuthStatus === true) {
    return (
      <div className="Dashboard">
        <Navbar />
        <div className="infoAndChatBoxContainer">
          <div className="InfoBox">
            <div className="displayUserInfo">
              <h1>Here is your dashboard</h1>
              <div>{user.username}</div>
              {/* {Data &&
                Data.map(({ username, id, profilePic }) => {
                  return (
                    <div key={id}>
                      <h3>{username}</h3>
                      <label onClick={handleProfilePicChange}>
                        <img
                          src={profilePic == "" ? "" : profilePic}
                          alt="profilePic"
                          className="profilePic"
                          width={48}
                          height={48}
                        />
                      </label>
                    </div>
                  );
                })} */}
              {/* <div
                style={{
                  display: "none",
                }}
              >
                <input
                  type="file"
                  alt="profile pic"
                  name="profilePic"
                  ref={fileInputRef}
                  onChange={HandleChange}
                />
                <button className="dpBtn" onClick={PostImage}>
                  Edit
                </button>
              </div> */}

              {/* <button onClick={(e) => navigate("/")}>Go to homepage</button> */}
            </div>
            {/* <div className="displayPosts">
              {posts.map(({ postIndex, caption, postMediaPath }) => {
                return (
                  <div key={postIndex}>
                    <div>{caption}</div>
                    <img
                      src={postMediaPath}
                      alt="logo"
                      width={200}
                      height={200}
                    />
                  </div>
                );
              })}
            </div> */}
            {/* <button onClick={() => navigate("/posts")}>Create New Post</button>
            <button onClick={() => navigate("/chat")}>Chats</button> */}
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Dashboard;
