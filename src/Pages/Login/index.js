import React, { useContext } from "react";
import "./register.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const authContextData = useContext(AuthContext);
  const { setIsLoggedIn } = authContextData;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState(false);
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault(); //ini ngejagain biar function nya ga otomatis jalan. ini HARUS dibuat gini
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        setRes(res.data.token);
        localStorage.setItem("token", res.data.token); //untuk nyimpen di local storage, harus ditaro di dalem THEN
        setIsLoggedIn(true);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      <div className="logo"></div>
      <h1>Login</h1>
      <div>
        <p>Email*</p>
        <input
          className="input_field"
          placeholder="Contoh: johndee@gmail.com"
          onChange={(e) => handleChangeEmail(e)}
        />
        <p>Create Password*</p>
        <input
          className="input_field"
          type="password"
          placeholder="6+ karakter"
          onChange={(e) => handleChangePassword(e)}
        />
      </div>
      <div>
        <button onClick={handleLogin} className="button_signin">
          Log In
        </button>
        {!!res.length && `Registrasi berhasil! Token anda : ${res}`}
      </div>
    </div>
  );
};

export default Login;
