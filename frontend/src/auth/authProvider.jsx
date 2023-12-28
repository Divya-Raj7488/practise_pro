import React from "react";
import { Navigate } from "react-router-dom";
// import isAuthenticated from "./useAuth";

const AuthProvider = ({ children }) => {

  if (authStatus) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthProvider;
