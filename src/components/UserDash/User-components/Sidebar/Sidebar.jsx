import React, { useState } from "react";
import "./Sidebar.css";

import Logo from "../../../../images/Logo.svg";

import { SidebarData } from "../../../../Data/Data";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div key={index}>
              <Link
                to={item.to}
                className={selected === index ? "menuItem active" : "menuItem"}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
