import axios from "axios";
import React, { useState } from "react";

export default function main() {
  const [formData, setformData] = useState({
    username: "",
    password: "",
  });
  const HandleInput = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const HandleLogin = async () => {
    const cleanData = JSON.parse(JSON.stringify(formData));
    try {
      const response = await axios.post(
        "http://localhost:3000/user/login",
        cleanData
      );
      console.log(response.data.message);
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
        placeholder="username"
        className="registerData"
        value={formData.username}
        onChange={HandleInput}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="registerData"
        value={formData.username}
        onChange={HandleInput}
      />
      <button onClick={HandleLogin}>submit</button>
    </div>
  );
}
