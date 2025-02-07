import React from "react";
import { MENU_LIST } from "../../data/menu_data"; // Import the MENU_LIST from menu_data.js
import NavItem from "./NavItem"; // Import the NavItem component

const NavBar = () => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex space-x-6">
        {/* Dynamically render NavItems using MENU_LIST */}
        {MENU_LIST.map((item, index) => (
          <NavItem key={index} to={item.href} text={item.text} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
