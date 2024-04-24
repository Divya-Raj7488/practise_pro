import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [{ user }] = useSelector((state) => state.users);

  return (
    <div className="navContainer">
      {user.length === 0 && (
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
