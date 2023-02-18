import React from "react";
import MainLogo from "../../../MainLogo/MainLogo";
import "./MyRoadmap.css";

const MyRoadmap = () => {
  return (
    <div className="myroadmap">
      <MainLogo />
      <di className="page-body">
        <ul className="year-list">
          <div className="term-container">
            <p style={{ fontSize: 20 }}>Term open for Registrations</p>
            <select name="term" id="term">
              <option value="">Select a term</option>
              <option value="">Fall</option>
              <option value="">Spring</option>
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
        </ul>
      </di>
    </div>
  );
};

export default MyRoadmap;
