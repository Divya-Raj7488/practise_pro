import axios from "axios";
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../features/userSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setformData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const HandleInput = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const HandleLogin = async (e) => {
    e.preventDefault();
    const cleanData = JSON.parse(JSON.stringify(formData));
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/user/login",
        data: cleanData,
        withCredentials: true,
      });
      if (response.status === 200) {
        console.log(response.data.user);
        const user = response.data.user;
        dispatch(setUser(user));
        // console.log(response.data.user);
        navigate("/");
      }
    } catch (error) {
      // if (error.response.data.message === "user not found") {
      //   navigate("/signup");
      // } else {
      //   console.log(error);
      // }
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
