import React from "react";
import "./register.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault(); //ini ngejagain biar function nya ga otomatis jalan. ini HARUS dibuat gini
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("https://reqres.in/api/register", payload)
      .then((res) => setRes(res.data.token))
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      <div className="logo"></div>
      <h1>Register</h1>
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
        <button onClick={handleRegister} className="button_signin">
          Sign In
        </button>
        <h3>Already have an account? Sign in here</h3>
        {!!res.length && `Registrasi berhasil! Token anda : ${res}`}
      </div>
    </div>
  );
};

export default Register;
