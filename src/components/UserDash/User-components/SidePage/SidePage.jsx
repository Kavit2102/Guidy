import React from "react";
import { Routes, Route } from "react-router-dom";

import MainDash from "../MainDash/MainDash";
import MySchedule from "../MySchedule/MySchedule";
import Calender from "../Calender/Calender";
import MyRoadmap from "../MyRoadmap/MyRoadmap";
import MyTasks from "../MyTasks/MyTasks";
import MyGrades from "../MyGrades/MyGrades";
import Fall from "../../../Fall/Fall";
import ProgrammingConcepts from "../programming-concepts/programming-concepts";

const SidePage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainDash />} />
      <Route exact path="/myschedule" element={<MySchedule />} />
      <Route exact path="/calender" element={<Calender />} />
      <Route exact path="/myroadmap" element={<MyRoadmap />} />
      <Route exact path="/mytasks" element={<MyTasks />} />
      <Route exact path="/mygrades" element={<MyGrades />} />
      <Route
        exact
        path="/programming-concepts"
        element={<ProgrammingConcepts />}
      />
    </Routes>
  );
};

export default SidePage;
