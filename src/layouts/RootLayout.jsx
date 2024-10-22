import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const RootLayout = ({ children, headerText }) => {
  return (
    <div>
      <Navbar />
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
