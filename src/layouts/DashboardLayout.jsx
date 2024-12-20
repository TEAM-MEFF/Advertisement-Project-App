import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
      <div>Dashboard Layout</div>
    </div>
  );
};

export default DashboardLayout;
