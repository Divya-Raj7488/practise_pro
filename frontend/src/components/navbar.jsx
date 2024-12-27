import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, AuthStatus, loading } = useSelector((state) => state.user);
  return (
    <div className="navContainer">
      {AuthStatus && user !== undefined ? (
        <>
          <div>
            <button onClick={() => navigate("/dashboard")}>Dashboard</button>
          </div>
          <div>
            <button onClick={() => navigate("/posts")}>posts</button>
          </div>
          <div>
            <button onClick={() => navigate("/")}>Homepage</button>
          </div>
        </>
      ) : (
        <>
          <div>
            <button onClick={() => navigate("/signin")}>Signin</button>
          </div>
          <div>
            <button onClick={() => navigate("/signup")}>Signup</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
