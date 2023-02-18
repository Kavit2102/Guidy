import React from "react";
import "./programming-concepts.css";

const ProgrammingConcepts = () => {
  return (
    <div className="programming-concepts">
      <span>My Grades</span>
      <ul>
        <li>Programming Concepts</li>
        <table>
          <tr>
            <th>Sr.</th>
            <th>Task</th>
            <th>Grades</th>
          </tr>

          <tr>
            <td>1</td>
            <td>Quiz 1</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Quiz 2</td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Midterm</td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Final</td>
            <td></td>
          </tr>
        </table>
      </ul>
    </div>
  );
};

export default ProgrammingConcepts;
