import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkIfLoggedIn = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    };
    checkIfLoggedIn();
  }, []);

  const authData = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={authData}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
