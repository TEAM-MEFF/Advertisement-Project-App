import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Analytics from "./vendor/components/Analytics";
import Logout from "./vendor/components/Logout";
import MyAdvert from "./vendor/components/MyAdvert";
import Orders from "./vendor/components/Orders";
import PostAd from "./vendor/components/PostAd";
import VendorDetails from "./vendor/components/VendorDetails";
import SettingsPage from "./vendor/components/SettingsPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/analytics" element={<Analytics />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/myadvert" element={<MyAdvert />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/postad" element={<PostAd />}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
        <Route path="/vendordetails" element={<VendorDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
