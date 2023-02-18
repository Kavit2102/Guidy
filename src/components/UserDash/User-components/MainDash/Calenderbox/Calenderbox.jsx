import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calenderbox.css";

const Calender = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="clndr">
      <span>Calender</span>
      <Calendar
        className={"react-calendar"}
        onChange={onChange}
        value={value}
        selectRange={true}
      />
    </div>
  );
};

export default Calender;
