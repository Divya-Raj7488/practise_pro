import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [Data, setData] = useState([]);

  return (
    <AuthContext.Provider value={{ Data, setData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
