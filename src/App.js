import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Homepage from "./Pages/Homepage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./HOC/ProtectedRoute";
import EditPage from "./Pages/EditPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const checkIfLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkIfLoggedIn();
  });

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            {/* bagian bawah ini Children nya */}
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path={`/editpage/:id`} element={<EditPage />} />
    </Routes>
  );
}

export default App;
