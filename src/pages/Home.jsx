import React from "react";
import ProductFetch from "../components/ProductFetch";
import NavbarResponsive from "../components/NavbarResponsive";
import ApiProductFetch from "../components/apiProductFetch";
import Cart from "./Cart";

const Home = () => {
  return (
    <div>
      <NavbarResponsive />
      <ApiProductFetch />
      <ProductFetch />
      <Cart />
    </div>
  );
};

export default Home;
