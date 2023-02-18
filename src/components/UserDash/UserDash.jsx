import React from "react";
import "./UserDash.css";

import Sidebar from "./User-components/Sidebar/Sidebar";
import Navbar from "./User-components/Navbar/Navbar";
import SidePage from "./User-components/SidePage/SidePage";

const UserDash = (props) => {
  return (
    <div className="userDash">
      <Sidebar />
      <div className="userDash2">
        <Navbar Name={props.Name} />
        <SidePage />
      </div>
    </div>
  );
};

export default UserDash;
