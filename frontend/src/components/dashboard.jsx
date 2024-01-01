import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

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

  const NavigateToPost = () => {
    setData(user);
    navigate("/posts");
  };

  if (AuthStatus) {
    return (
      <div className="registerContainer">
        <h1>Here is your dashboard</h1>
        {user &&
          user.map(({ username }) => {
            return <div key={username}>{username}</div>;
          })}
        <button onClick={NavigateToPost}>POSTS</button>
      </div>
    );
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default Dashboard;
