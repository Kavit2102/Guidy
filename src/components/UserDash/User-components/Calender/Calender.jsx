import React from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calender.css";

const Calender = () => {
  return (
    <div className="calender">
      <span>Calendar</span>
      <Calendar className={"react-calendar"} selectRange={true} />
    </div>
  );
};

export default Calender;
