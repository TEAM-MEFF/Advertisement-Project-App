import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const RootLayout = ({ children, headerText }) => {
  return (
    <div>
      <Navbar />
      <h1>{headerText}</h1>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
