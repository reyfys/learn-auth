import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const authContextData = useContext(AuthContext);
  const { isLoggedIn } = authContextData;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
