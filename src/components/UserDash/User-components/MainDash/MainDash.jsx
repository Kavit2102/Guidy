import React from "react";

import "./MainDash.css";

import Schedule from "./Schedule/Schedule";
import Performancebar from "./Performancebar/Performancebar";
import Calender from "./Calenderbox/Calenderbox";
import OverallProgress from "./Overallprogress/Overallprogress";
// import Mytasks from "../MyTasks/TaskList/TaskList";
import Resources from "./Resources/Resources";

const MainDash = () => {
  return (
    <div className="MainDash">
      <div className="part1">
        <Schedule />
        <Performancebar />
        {/* <Mytasks /> */}
      </div>
      <div className="part2">
        <OverallProgress />
        <Calender />
        <Resources />
      </div>
    </div>
  );
};

export default MainDash;
