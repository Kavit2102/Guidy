import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import BGstyles from "./DashBG.module.css";

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import UserDash from "./components/UserDash/UserDash";
import { Navbar } from "react-bootstrap";

function App() {
  const [Name, setName] = useState("");
  return (
    <>
      <div className={BGstyles.DashBG}>
        <div className={BGstyles.DashBGbox}>
          <Routes>
            <Route exact path="/" element={<Login setName={setName} />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route
              exact
              path="/userdash/*"
              element={<UserDash Name={Name} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
