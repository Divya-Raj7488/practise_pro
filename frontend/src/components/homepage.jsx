import React, { useContext, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../features/userSlice";

export default function Homepage() {

  const user = useSelector((state) => state.users);
  const response = useDispatch(fetchTodos);
  console.log(fetchTodos);

 
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/user/", {
  //       withCredentials: true,
  //     });
  //     if (response) {
  //       setData([response.data.authorizedData]);
  //       setAuthStatus(true);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <Navbar/>
      <div className="homepageContainer">
        <h1>Welcome</h1>
      </div>
    </>
  );
}
