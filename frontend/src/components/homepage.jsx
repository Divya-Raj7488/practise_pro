import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Homepage() {
  const {Data} = useContext(AuthContext)
  console.log(Data)
  return (
    <div className="homepageContainer">
      <h1>welcome</h1>
      <div>
        <a href="/login">Login</a>
      </div>
      <div>
        <a href="/dashboard">Dashboard</a>
      </div>
      <div>
        <a href="/posts">posts</a>
      </div>
    </div>
  );
}
