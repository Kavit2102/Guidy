import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../../../MainLogo/MainLogo";
import "./MyRoadmap.css";

const MyRoadmap = () => {
  return (
    <div className="myroadmap">
      <MainLogo />
      <div className="page-body">
        <ul className="year-list">
          <div className="term-container">
            <p style={{ fontSize: 20 }}>Term open for Registrations</p>
            <select name="term" id="term">
              <option value="term">Select a term</option>
              <option value="fall">
                <Link to={"/userdash/myroadmap/fall"}>Fall</Link>
              </option>
              <option value="spring">Spring</option>
            </select>
          </div>
          <div className="year-container">
            <p style={{ fontSize: 20 }}>Choose Year</p>
            <li className="year-item">
              <a href="/courses/1">First Year</a>
            </li>
            <li className="year-item">
              <a href="/courses/2">Second Year </a>
            </li>
            <li className="year-item">
              <a href="/courses/3">Third Year</a>
            </li>
            <li className="year-item">
              <a href="/courses/4">Fourth Year</a>
            </li>
          </div>
          <button
            style={{
              width: "250px",
              height: "32px",
              borderRadius: "12px",
              marginTop: "1rem",
            }}
          >
            <a href="/">Continue</a>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MyRoadmap;
