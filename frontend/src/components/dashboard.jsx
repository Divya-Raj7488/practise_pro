import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { Data, setData } = useContext(AuthContext);
  const [AuthStatus, setAuthStatus] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user/dashboard", {
        withCredentials: true,
      });
      if (response) {
        setUser(response.data.authorizedData);
        console.log(response.data.authorizedData);
        setisLoading(false);
        setAuthStatus(true);
      } else {
        setisLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setData([user]);
  }, [user, setUser]);


  if (AuthStatus) {
    return (
      <div className="registerContainer">
        <div className="displayUserInfo">
          <h1>Here is your dashboard</h1>
          <div>{user.username}</div>
          <button onClick={(e) => navigate("/")}>Go to homepage</button>
        </div>
        <div className="displayPosts">
          {user.posts.map(({postIndex,caption,createdAt,postMediaPath}) => {
            return (
              <div key={postIndex}>
                <div>{caption}</div>
                <div>{createdAt}</div>
                <img src={postMediaPath} alt="logo" />
              </div>
            );
          })}
        </div>
        <button onClick={() => navigate('/posts')}>Create New Post</button>
      </div>
    );
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Dashboard;
