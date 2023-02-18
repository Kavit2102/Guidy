import React from "react";
import { useState } from "react";
import "./Schedule.css";

import { ScheduleData } from "../../../../../Data/Data2";

const Schedule = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="schedbox">
      <div className="sched">
        <span>Schedule</span>
        {ScheduleData.map((item, index) => {
          return (
            <div
              className={
                selected === index ? "schedcourse active" : "schedcourse"
              }
              key={index}
              onClick={() => setSelected(index)}
            >
              <span>{item.heading}</span>
            </div>
          );
        })}
      </div>
      <div className="courseovr">
        <span>Course Overview</span>
        {ScheduleData.map((item, index) => {
          return (
            <div key={index} className="courseovrdetails">
              <div
                className={selected === index ? "courseovrprogress" : "hide"}
                onClick={() => setSelected(index)}
              >
                {item.percent}
              </div>

              <div className={selected === index ? "courseovrbox" : "hide"}>
                {item.describe}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
