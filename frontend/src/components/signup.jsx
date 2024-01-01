import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const HandleRegistration = async () => {
    try {
      const cleanData = JSON.parse(JSON.stringify(formData));
      if (cleanData.password === cleanData.confirmPassword) {
        const response = await axios.post(
          "http://localhost:3000/user/register",
          cleanData
        );
        if (response.status === 200) {
          navigate('/dashboard')
        }
      } else {
        return setmessage("your passwords don't match.");
      }
    } catch (error) {
      console.log(error);
      setmessage(response.error.message);
    }
  };

    return (
      <div className="registerContainer">
       
        <div className="inputContainer">
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleInputChange}
            className="registerData"
            value={formData.username}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="registerData"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
            className="registerData"
            value={formData.password}
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Confirm password"
            onChange={handleInputChange}
            className="registerData"
          />
          <button type="submit" onClick={HandleRegistration}>
            submit
          </button>
        </div>
      </div>
    );
  }
