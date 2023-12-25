import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [renderId, setrenderId] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setmessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const HandleRegistration = async () => {
    try {
      const cleanData = JSON.parse(JSON.stringify(formData));

      const response = await axios.post(
        "http://localhost:3000/user/register",
        cleanData
      );
      setrenderId(2);
      setmessage(response.data.message);
    } catch (error) {
      console.log(error);
      setmessage(response.error.message);
    }
  };

  return (
    <div className="registerContainer">
      {renderId === 1 && (
        <div className="inputContainer">
          <input
            type="text"
            placeholder="username"
            value={formData.username}
            name="username"
            onChange={handleInputChange}
            className="registerData"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="registerData"
          />
          <button type="submit" onClick={HandleRegistration}>
            submit
          </button>
        </div>
      )}
      {renderId === 2 && <div>{message}</div>}
    </div>
  );
}
