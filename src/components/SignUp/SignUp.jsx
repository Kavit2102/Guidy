import React from "react";
import "./SignUp.css";

import MainLogo from "../MainLogo/MainLogo";
import SignUpForm from "./SignUpForm/SignUpForm";

const SignUp = () => {
  return (
    <div className="SignUp">
      <MainLogo />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
