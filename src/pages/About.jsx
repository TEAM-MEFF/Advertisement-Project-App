import React from "react";
import RootLayout from "../layouts/RootLayout";
import LogIn from "../components/Login";
import SignUp from "../components/SignUp";

const About = () => {
  return (
    <div>
      <RootLayout headerText="About Page">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa soluta
          exercitationem qui ullam? Quo nostrum ea nesciunt iure nemo porro
          magni corporis consequatur reiciendis veritatis, voluptate veniam illo
          perferendis assumenda.
        </p>
        <SignUp />
        <LogIn />
      </RootLayout>
    </div>
  );
};

export default About;
