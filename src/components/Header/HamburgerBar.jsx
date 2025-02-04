import React, { useState } from "react";
import NavItem from "./NavItem";

const HamburgerBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Local state to toggle the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/close
  };

  return (
    <div className="md:hidden">
      {" "}
      {/* Visible only on small screens */}
      <button className="text-3xl" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
      {menuOpen && (
        <div className="absolute top-16 right-0 bg-white p-4 shadow-lg rounded-md w-48">
          <NavItem to="/" text="Home" />
          <NavItem to="/about" text="About" />
          <NavItem to="/projects" text="Projects" />
          <NavItem to="/contact" text="Contact" />
          <NavItem to="/skills" text="Skills" />
        </div>
      )}
    </div>
  );
};

export default HamburgerBar;
