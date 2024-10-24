import React from "react";
import RootLayout from "../layouts/RootLayout";
import LogIn from "../components/Login";
import SignUp from "../components/SignUp";
import ProductPost from "../components/ProductPost";
import ApiAddProduct from "../components/ApiAddProducts";
import AdddProduct from "../components/AdddProduct";

const About = () => {
  return (
    <div>
      {/* <RootLayout headerText="About Page"> */}
      {/* <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa soluta
        exercitationem qui ullam? Quo nostrum ea nesciunt iure nemo porro
        magni corporis consequatur reiciendis veritatis, voluptate veniam illo
        perferendis assumenda.
      </p> */}
      {/* <SignUp /> */}
      {/* <LogIn /> */}
      {/* </RootLayout> */}
      {/* <ProductPost /> */}
      <ApiAddProduct />
      <AdddProduct />
    </div>
  );
};

export default About;
