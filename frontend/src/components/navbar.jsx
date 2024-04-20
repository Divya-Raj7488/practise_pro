import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { Data } = useContext(AuthContext);

  return (
    <div className="navContainer">
      {Data.length === 0 && (
        <>
          <div>
            <button onClick={() => navigate("/signin")}>Signin</button>
          </div>
          <div>
            <button onClick={() => navigate("/signup")}>Signup</button>
          </div>
        </>
      )}

      <div>
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      </div>
      <div>
        <button onClick={() => navigate("/posts")}>posts</button>
      </div>
      <div>
        <button onClick={() => navigate("/")}>Homepage</button>
      </div>
    </div>
  );
};

export default Navbar;
