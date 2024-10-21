import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/Analytics" element={<Dashboard/>}></Route>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
