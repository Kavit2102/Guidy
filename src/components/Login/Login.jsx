import React from "react";
import "./Login.css";

import MainLogo from "../MainLogo/MainLogo";
import LoginForm from "./LoginForm/LoginForm";

const Login = (props) => {
  return (
    <div className="Login">
      <MainLogo />
      <LoginForm setName={props.setName} />
    </div>
  );
};

export default Login;
