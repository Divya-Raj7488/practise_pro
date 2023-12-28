import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const [Data, setData] = useState([
    {
      username: "hello",
    },
  ]);
  const [AuthStatus, setAuthStatus] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user/dashboard", {
        withCredentials: true,
      });
      
      if (response) {
        setData([response.data.authorizedData]); 
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

  if (AuthStatus) {
    return (
      <div className="registerContainer">
        <h1>Here is your dashboard</h1>
        {Data &&
          Data.map(({ username }) => {
            return <div key={username}>{username}</div>;
          })}
      </div>
    );
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return <Navigate to='/login' />;
  }
};

export default Dashboard;
