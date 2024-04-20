import React, { useContext, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./navbar";

export default function Homepage() {
  // const navigate = useNavigate();
  const { setData, setAuthStatus } = useContext(AuthContext);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user/", {
        withCredentials: true,
      });
      if (response) {
        setData([response.data.authorizedData]);
        setAuthStatus(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="homepageContainer">
      <h1>Welcome</h1>
    </div>
    </>
  );
}
