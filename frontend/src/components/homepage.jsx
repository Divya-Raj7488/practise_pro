import React, { useEffect } from "react";
import Navbar from "./navbar";
import Timer from "./timer";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function Homepage() {
  const dispatch = useDispatch()
  const Data = [];
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user/", {
        withCredentials: true,
      });
      if (response) {
        // dispatch()
        // setData([response.data.authorizedData]);
        // setAuthStatus(true);
        dispatch()
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
      <Navbar />
      <div className="homepageContainer">
        {Data === undefined || Data.length === 0 ? (
          <h1>Welcome</h1>
        ) : (
          <h1>Welcome {Data[0].name}</h1>
        )}
        <Timer />
      </div>
    </>
  );
}
