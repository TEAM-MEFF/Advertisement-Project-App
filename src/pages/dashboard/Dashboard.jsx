import React from "react";
import SalesByCategory from "./SalesByCategory";

const Dashboard = () => {
  return (
    <div>
      <p>Dashboard page</p>
      <div class="parent">
        <div class="div1"> </div>
        <div class="div2"> </div>
        <div class="div3"> </div>
        <div class="div4">
          <SalesByCategory />
        </div>
        <div class="div5"> </div>
        <div class="div6"> </div>
        <div class="div7"> </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
