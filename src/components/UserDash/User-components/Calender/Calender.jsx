import React from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calender.css";

const Calender = () => {
  return (
    <div className="calender">
      <span>Calendar</span>
      <div className="container">
        <div className="left">
          <Calendar className={"calendar"} selectRange={true} />
        </div>

        <div className="right">
          <div className="drop-events">
            <button>Drop all events</button>
            <div className="event-list"></div>
          </div>

          <form action="">
            <input type="text" placeholder="Event name" />
            <input type="text" placeholder="Event Type" />
            <input type="date" placeholder="mm/dd/yy" />
            <div className="radio-input">
              <div>
                <input type="radio" name="radio" id="yellow" />
                <span>Yellow</span>
              </div>
              <div>
                <input type="radio" name="radio" id="blue" />
                <span>Blue</span>
              </div>
              <div>
                <input type="radio" name="radio" id="orange" />
                <span>Orange</span>
              </div>
            </div>
            <button>Add Event</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Calender;
