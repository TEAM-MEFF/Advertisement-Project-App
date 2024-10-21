import React, { useEffect, useState } from "react";
import RootLayout from "../../layouts/RootLayout";
import CategoriesSection from "./components/CategoriesSection";
import UserLogIn from "../../components/UserLogIn";
import UserSignUp from "../../components/UserSignUp";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Dashboard from "../../components/Dashboard";

const UserHomePage = () => {
  const [categoriesBarToggle, setCategoriesBarToggle] = useState(false);

  useEffect(() => {
    console.log(categoriesBarToggle);
  }, [categoriesBarToggle]);
  return (
    <div>
      <RootLayout headerText="Home Page Home Page">
        <div>
          <Navbar/>
          <Dashboard/>
         <Sidebar/>
          <UserLogIn/>
          <br />
          <UserSignUp/>
          <br />
          <CategoriesSection/>
        </div>
      </RootLayout>
    </div>
  );
};

export default UserHomePage;
