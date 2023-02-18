import React from "react";
import "./MyGrades.css";

const MyGrades = () => {
  return (
    <div className="grades">
      <p>My Grades</p>

      <table>
        <tr>
          <th>Sr.</th>
          <th>Courses</th>
          <th>Grades</th>
        </tr>

        <tr>
          <td>1</td>
          <td>Programming Concepts</td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Calculas I</td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>General Chemistry</td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>English Language I</td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>History of Qatar</td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Experimenal General Chemiatry I</td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default MyGrades;
