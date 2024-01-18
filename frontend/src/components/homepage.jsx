import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate()
  return (
    <div className="homepageContainer">
      <h1>Welcome</h1>
      <div>
        <button onClick={()=> navigate("/signin")}>Signin</button>
      </div>
      <div>
        <button onClick={()=> navigate("/signup")}>Signup</button>
      </div>
      <div>
        <button onClick={()=> navigate("/dashboard")}>Dashboard</button>
      </div>
      <div>
        <button onClick={()=> navigate("/posts")}>posts</button>
      </div>
    </div>
  );
}
