import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import DisplayPosts from "./displayPosts";

const Dashboard = () => {
  const { Data, setData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [AuthStatus, setAuthStatus] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user/dashboard", {
        withCredentials: true,
      });
      if (response) {
        setUser([response.data.authorizedData]);
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
    setData(user);
  }, [user]);

  const NavigateToPost = () => {
    navigate("/posts");
  };

  if (AuthStatus) {
    return (
      <div className="registerContainer">
        <div className="displayUserInfo">
          <h1>Here is your dashboard</h1>
          {user &&
            user.map(({ username }) => {
              return <div key={username}>{username}</div>;
            })}
          <button onClick={NavigateToPost}>Posts</button>
          <button onClick={(e) => navigate("/")}>Go to homepage</button>
        </div>
        <div className="displayPosts">
        <DisplayPosts />
        </div>
      </div>
    );
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default Dashboard;
