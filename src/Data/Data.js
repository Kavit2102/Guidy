// Sidebar imports

import {
  UilEstate,
  UilSchedule,
  UilCalender,
  UilMap,
  UilFileCheckAlt,
  UilChartLine,
  UilUserCircle,
  UilSetting,
  UilSignout,
} from "@iconscout/react-unicons";

// Sidebar data
export const SidebarData = [
  {
    icon: UilEstate,
    name: "Dashboard",
    to: "/userdash",
  },
  {
    icon: UilSchedule,
    name: "My Schedules",
    to: "/userdash/myschedule",
  },
  {
    icon: UilCalender,
    name: "Calender",
    to: "/userdash/calender",
  },
  {
    icon: UilMap,
    name: "My Roadmap",
    to: "/userdash/myroadmap",
  },
  {
    icon: UilFileCheckAlt,
    name: "My Tasks",
    to: "/userdash/mytasks",
  },
  {
    icon: UilChartLine,
    name: "My Grades",
    to: "/userdash/mygrades",
  },
];

// Sidebar bottom data
export const SidebarData2 = [
  {
    icon: UilUserCircle,
    name: "Edit Profile",
    to: "/editprofile",
  },
  {
    icon: UilSetting,
    name: "Setting",
    to: "/setting",
  },
  {
    icon: UilSignout,
    name: "Log Out",
    to: "/",
  },
];
