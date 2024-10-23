import React from "react";
import ProductFetch from "../components/ProductFetch";
import NavbarResponsive from "../components/NavbarResponsive";
import ApiProductFetch from "../components/apiProductFetch";
import CategoriesSection from "./user/components/CategoriesSection";

const Home = () => {
  return (
    <div>
      <NavbarResponsive />
      <ApiProductFetch />
      <ProductFetch />
      <CategoriesSection />
    </div>
  );
};

export default Home;
