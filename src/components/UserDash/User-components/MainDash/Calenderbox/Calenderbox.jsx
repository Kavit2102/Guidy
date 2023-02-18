import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./Calenderbox.css";
import Calendar from "react-calendar";

const Calender = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="clndr">
      <span>Calender</span>
      <Calendar
        onChange={onChange}
        value={value}
        className={"react-calendar"}
        selectRange={true}
      />
    </div>
  );
};

export default Calender;
