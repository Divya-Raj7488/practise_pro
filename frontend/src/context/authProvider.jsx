import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [Data, setData] = useState([]);
  const [AuthStatus, setAuthStatus] = useState(false);

  return (
    <AuthContext.Provider value={{ Data, setData, AuthStatus, setAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
