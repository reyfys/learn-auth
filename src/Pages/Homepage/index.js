import React from "react";
import { Link } from "react-router-dom";
import Register from "../Register";

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to={"/register"}>
        <button>Register</button>
      </Link>
      <Link to={"/login"}>
        <button>Log in</button>
      </Link>
    </div>
  );
};

export default Homepage;
