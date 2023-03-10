import React from "react";
import "./Overallprogress.css";

const Overallprogress = () => {
  return (
    <div className="ovrprgs">
      <span>Overall Progress</span>
      <div className="prgsBar">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="float"
        >
          <path
            fill="rgba(217, 217, 217, 0.82)"
            d="M31.6,-52.4C43.1,-48.1,56,-44,62.7,-35.2C69.4,-26.5,69.9,-13.3,71.2,0.8C72.5,14.8,74.6,29.5,69.4,40.8C64.2,52.1,51.6,59.9,38.8,67.7C26,75.4,13,83.2,1.8,80C-9.4,76.9,-18.8,62.8,-32.4,55.6C-46.1,48.3,-64,47.8,-73.8,39.6C-83.6,31.5,-85.4,15.8,-79.8,3.2C-74.2,-9.3,-61.3,-18.6,-54.7,-32.4C-48.2,-46.3,-48.1,-64.7,-40,-71C-32,-77.3,-16,-71.4,-3,-66.3C10.1,-61.2,20.1,-56.7,31.6,-52.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="floating"
        >
          <path
            fill="rgba(186, 105, 246, 0.5852)"
            d="M31.6,-52.4C43.1,-48.1,56,-44,62.7,-35.2C69.4,-26.5,69.9,-13.3,71.2,0.8C72.5,14.8,74.6,29.5,69.4,40.8C64.2,52.1,51.6,59.9,38.8,67.7C26,75.4,13,83.2,1.8,80C-9.4,76.9,-18.8,62.8,-32.4,55.6C-46.1,48.3,-64,47.8,-73.8,39.6C-83.6,31.5,-85.4,15.8,-79.8,3.2C-74.2,-9.3,-61.3,-18.6,-54.7,-32.4C-48.2,-46.3,-48.1,-64.7,-40,-71C-32,-77.3,-16,-71.4,-3,-66.3C10.1,-61.2,20.1,-56.7,31.6,-52.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <span className="dot">
          {" "}
          <p className="dot-text">
            36% <br /> Progress
          </p>{" "}
        </span>
      </div>
    </div>
  );
};

export default Overallprogress;
