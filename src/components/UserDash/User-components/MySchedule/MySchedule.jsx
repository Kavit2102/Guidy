import React from "react";
import "./MySchedule.css";

const MySchedule = () => {
  return (
    <div className="myschedule">
      <span>My Schedule</span>
      <p id="subheading">Your Registered Courses</p>
      <table>
        <tr>
          <th>Sr.</th>
          <th>Course name</th>
          <th>Year</th>
          <th>Semister</th>
          <th>Action</th>
        </tr>

        <tr>
          <td>1</td>
          <td>History of Quatar</td>
          <td>1</td>
          <td>fall</td>
          <td>
            <button>Drop Course</button>
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td>General Chemistry</td>
          <td>1</td>
          <td>fall</td>
          <td>
            <button>Drop Course</button>
          </td>
        </tr>

        <tr>
          <td>3</td>
          <td>Programming Concepts</td>
          <td>1</td>
          <td>fall</td>
          <td>
            <button>Drop Course</button>
          </td>
        </tr>

        <tr>
          <td>4</td>
          <td>English language I</td>
          <td>1</td>
          <td>fall</td>
          <td>
            <button>Drop Course</button>
          </td>
        </tr>

        <tr>
          <td>5</td>
          <td>Experimental General Chemistry</td>
          <td>1</td>
          <td>fall</td>
          <td>
            <button>Drop Course</button>
          </td>
        </tr>

        <tr>
          <td>6</td>
          <td>Calculas I</td>
          <td>1</td>
          <td>fall</td>
          <td>
            <button>Drop Course</button>
          </td>
        </tr>
      </table>

      <button id="semister">End Semister</button>
    </div>
  );
};

export default MySchedule;
