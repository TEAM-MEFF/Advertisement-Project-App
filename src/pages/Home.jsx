import React from "react";
import ProductFetch from "../components/ProductFetch";
import NavbarResponsive from "../components/NavbarResponsive";
import ApiProductFetch from "../components/ApiProductFetch";
import CategoriesSection from "./user/components/CategoriesSection";
import HeroCarousel from "../components/HeroCarousel";

const Home = () => {
  return (
    <div>
      <NavbarResponsive />
      <HeroCarousel />
      <ApiProductFetch />
      <ProductFetch />
      <CategoriesSection />
    </div>
  );
};

export default Home;
