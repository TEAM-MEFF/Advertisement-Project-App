import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const NavbarResponsive = () => {
  let [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between md:flex-col bg-slate-200 w-full sticky top-0 z-[1]">
      <div className="flex items-center md:w-[92%]  mx-auto justify-center md:justify-between py-2 bg-slate-200 ">
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
        <SearchBox />
        <div className="flex items-center gap-2">
          <Link
            to="/vendordash"
            className=" flex gap-2 border-2 border-theme-color rounded-full p-1 px-2"
          >
            <span className=" text-lg font-medium">Start Selling</span>
            <IonIcon
              name="person-outline"
              className="text-4xl md:text-xl text-theme-color pt-1"
            />
          </Link>
          <Link to="/cart">
            <IonIcon
              name="cart-outline"
              className="text-4xl md:text-5xl text-the"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavbarResponsive;
