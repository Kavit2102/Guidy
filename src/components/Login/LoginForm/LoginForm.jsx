import React from "react";
import "./LoginForm.css";

import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = (props) => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  // const [data, setData] = useState([]);
  // console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("userData");

    const { email, password } = inpval;
    if (email === "") {
      alert("email field is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres ('@' is missing)");
    } else if (!email.includes(".com")) {
      alert("plz enter valid email addres ('.com' is missing)");
    } else if (password === "") {
      alert("password field is requred");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        // console.log(userdata);
        const userlogin = userdata.filter((el, k) => {
          // console.log(el.firstname);
          props.setName(el.firstname);
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          // alert("user login succesfully");
          localStorage.setItem("user_login", JSON.stringify(userlogin));
          history("/userdash");
        }
      }
    }
  };

  return (
    <div className="login">
      <form action="" className="login-form">
        <h1>Login</h1>
        <div className="details">
          <input
            type="email"
            name="email"
            onChange={getdata}
            placeholder="E-mail"
          />
          <input
            type="password"
            name="password"
            onChange={getdata}
            placeholder="password"
          />
          <button type="submit" onClick={addData}>
            LogIn
          </button>
        </div>
        <div className="login-navigation">
          <span>
            Don't have an account ?{" "}
            <NavLink to={"/signup"} className="navsignup">
              SignUp
            </NavLink>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
