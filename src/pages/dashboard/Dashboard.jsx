import React from "react";
import SalesByCategory from "./SalesByCategory";
import MostViewedProduct from "./MostViewedProduct";
import MostPurshased from "./MostPurshased";
import BusinessDetails from "./BusinessDetails";
import UserEvent from "./UserEvent";

const Dashboard = () => {
  return (
    <div >
      <div class="parent mt-14 bg-slate-200">
        <div class="div1">
          <BusinessDetails />
        </div>
        <div class="div2">
          <SalesByCategory />
        </div>
        <div className="div3 h-10">
          <MostViewedProduct />
        </div>
        <div class="div4">
          <MostPurshased />
        </div>
        <div class="div5">
          <UserEvent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
