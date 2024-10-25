import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";

const NavbarResponsive = () => {
  let [open, setOpen] = useState(false);

  return (

    <div className="flex sticky top-0 z-[1] items-center mx-auto justify-between py-2 px-10 bg-slate-200 ">
      <div className="content-center items-center">
        <Link to="/">
          <span className="bg-theme-color text-lg px-3 py-2  text-white font-bold content-center text-center">
            Di Me🛒
          </span>
          <span
            href="#"
            className=" px-2 py-1.5 text-lg text-theme-color content-center hover:bg-theme-color hover:text-white border-theme-color border-2 text-center font-bold"
          >
            DWA🛍️
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-1 md:gap-3">
        <Link
          to="/sign-up"
          className=" flex gap-2 border-2 border-theme-color rounded-full px-2 py-1 text-center"
        >
          <span className=" lg:text-lg text-sm font-medium">Start Selling</span>
          <IonIcon
            name="person-outline"
            className=" text-2xl text-theme-color my-auto"
          />
        </Link>
        <Link to="/cart">
          <div>
            <div className="relative">
              <IonIcon
                name="cart-outline"
                className="text-xl md:text-3xl text-theme-color my-auto align-middle"
              />
              <span className="absolute top-[-3px] right-[-6px] w-2 h-2 bg-red-400 rounded-full"></span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavbarResponsive;
