import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="flex justify-around bg-slate-400 h-12 items-center">
        <div>LOGO</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link>NavItem 1</Link>
            </li>
            <li>
              <Link>NavItem 2</Link>
            </li>
            <li>
              <Link>NavItem 3</Link>
            </li>
            <li>
              <Link>NavItem 4</Link>
            </li>
            <li>
              <Link>NavItem 5</Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <p>Account</p>
          <p>Cart</p>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
