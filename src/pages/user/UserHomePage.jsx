import React, { useEffect, useState } from "react";
import RootLayout from "../../layouts/RootLayout";
import CategoriesSection from "./components/CategoriesSection";
import UserLogIn from "../../components/UserLogIn";
import UserSignUp from "../../components/UserSignUp";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Dashboard from "../../components/Dashboard";
import SignUp from "../../components/SignUp";

const UserHomePage = () => {
  const [categoriesBarToggle, setCategoriesBarToggle] = useState(false);

  useEffect(() => {
    console.log(categoriesBarToggle);
  }, [categoriesBarToggle]);
  return (
    <div>
      <RootLayout headerText="Heading Text using the HeaderFormatText">
        <div>
          <Navbar />
          <Dashboard />
          <Sidebar />
          <SignUp />
          <UserLogIn />
          <br />
          <UserSignUp />
          <br />
          <CategoriesSection />
        </div>
      </RootLayout>
    </div>
  );
};

export default UserHomePage;
