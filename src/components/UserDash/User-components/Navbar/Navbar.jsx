import React, { useState } from "react";

import "./Navbar.css";
import Profile from "../../../../images/Profile.svg";
import { SidebarData2 } from "../../../../Data/Data";

import { UilSearch } from "@iconscout/react-unicons";
import { UilBell } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const Navbar = (props) => {
  const [selected2, setSelected2] = useState();
  // const [logindata, setLoginData] = useState([]);

  // const history = useNavigate();

  //   const userName = () => {
  //     const getuser = localStorage.getItem("user_login");
  //     if (getuser && getuser.length) {
  //         const user = JSON.parse(getuser);

  //         setLoginData(user);
  //     }
  // }

  // useEffect(() => {
  //   userName();
  // }, [])

  // const userlogout = ()=>{
  //   localStorage.removeItem("user_login")
  //   history("/");
  // }

  return (
    <div className="navbar">
      {/* searchbar */}
      <div className="searchbar">
        <span>
          <UilSearch />
        </span>
        <input type="search" name="" id="" placeholder="Search" />
      </div>

      {/* notification */}
      <div className="notification">
        <span>
          <UilBell />
        </span>
      </div>

      {/* Profile dropdown */}
      <div className="profile dropdown">
        <button className="dropbtn">
          <span>
            Hello {props.Name}
            {/* {logindata[0].name} */}
            <br />
            <span>Welcome Back!</span>
          </span>
          <img src={Profile} alt="" />
        </button>
        <div className="dropdown-content">
          {SidebarData2.map((item, index) => {
            return (
              <div key={index}>
                <NavLink
                  to={item.to}
                  className={
                    selected2 === index ? "menuItem2 active" : "menuItem2"
                  }
                  onClick={() => setSelected2(index)}
                >
                  <item.icon />
                  <span>{item.name}</span>
                </NavLink>
              </div>
            );
          })}
          {/* <button onClick={userlogout}>LogOut</button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
