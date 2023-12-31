import axios from "axios";
import React, { useState } from "react";

export default function Login() {
  const [formData, setformData] = useState({
    username: "",
    password: "",
    email:"",
  });
  const HandleInput = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const HandleLogin = async (e) => {
    e.preventDefault()
    const cleanData = JSON.parse(JSON.stringify(formData));
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/user/login",
        data: cleanData,
        withCredentials: true,
      });
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="registerContainer">
      <h2>Login</h2>
      <input
        type="text"
        name="username"
        placeholder="username or email"
        className="registerData"
        value={formData.username}
        onChange={HandleInput}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="registerData"
        value={formData.password}
        onChange={HandleInput}
      />
      <button onClick={HandleLogin}>submit</button>
    </div>
  );
}
