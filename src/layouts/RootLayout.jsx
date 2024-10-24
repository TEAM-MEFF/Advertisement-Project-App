import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import NavbarResponsive from "../components/NavbarResponsive";

const RootLayout = ({ children, headerText }) => {
  return (
    <div>
      <NavbarResponsive />
      <div className="flex">
        <Sidebar />
        <div >
          <h1>{headerText}</h1>
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
