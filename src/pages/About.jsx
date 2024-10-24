import React from "react";
import RootLayout from "../layouts/RootLayout";
import ApiAddProduct from "../components/ApiAddProduct";
import EditProduct from "../components/EditProduct";

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
      <ApiAddProduct />
      <EditProduct />
    </div>
  );
};

export default About;
