import React from "react";
import MainLogo from "../MainLogo/MainLogo";
import "./Fall.css";

const Fall = () => {
  return (
    <div className="fall">
      <MainLogo />
      <div className="container">
        <ul>
          <li>
            <h1>Fall</h1>
          </li>
          <li className="fall-courses">
            <input type="checkbox" name="" id="" /> Programming Concepts
          </li>
          <li className="fall-courses">
            <input type="checkbox" name="" id="" /> History of Qatar
          </li>
          <li className="fall-courses">
            <input type="checkbox" name="" id="" /> General Chemistry I{" "}
          </li>
          <li className="fall-courses">
            <input type="checkbox" name="" id="" /> Experimental General
            Chemistry I
          </li>
          <li className="fall-courses">
            <input type="checkbox" name="" id="" /> Calculas I
          </li>
          <li className="fall-courses">
            <input type="checkbox" name="" id="" /> English Language I
          </li>
        </ul>
        <button>Register for selected course</button>
      </div>
    </div>
  );
};

export default Fall;
