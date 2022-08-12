import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Homepage from "./Pages/Homepage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./HOC/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(token);
    }
  });

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            {/* bagian bawah ini Children nya */}
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
