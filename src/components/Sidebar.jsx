import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start justify-around left-0 bg-blue-200 w-1/5 min-h-96">
      <div>LOGO</div>
      <div className='flex flex-col transition-all duration-1000 ease-in-out'>
        <Link to="/" className='sm:text-base md:text-lg px-2 py-1 hover:bg-theme-color hover:text-white rounded'>Dashboard</Link>
        <Link to="/postAd" className='sm:text-base md:text-lg px-2 py-1 hover:bg-theme-color hover:text-white rounded'>Post Ad</Link>
        <Link to="/myAdverts" className='sm:text-base md:text-lg px-2 py-1 hover:bg-theme-color hover:text-white rounded'>My Adverts</Link>
        <Link to="/pending" className='sm:text-base md:text-lg px-2 py-1 hover:bg-theme-color hover:text-white rounded'>Sell</Link>
        <Link to="/pending" className='sm:text-base md:text-lg px-2 py-1 hover:bg-theme-color hover:text-white rounded'>About Us</Link>
        <Link to="/pending" className='sm:text-base md:text-lg px-2 py-1 hover:bg-theme-color hover:text-white rounded'>Contact Us</Link>
      </div>
      <div>Socials</div>
    </div>
  );
};

export default Sidebar;
