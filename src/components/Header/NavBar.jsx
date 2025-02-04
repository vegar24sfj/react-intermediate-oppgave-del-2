import React from 'react';
import NavItem from './NavItem';

const NavBar = () => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex space-x-6">
        <NavItem to="/" text="Home" />
        <NavItem to="/about" text="About" />
        <NavItem to="/projects" text="Projects" />
        <NavItem to="/contact" text="Contact" />
        <NavItem to="/skills" text="Skills" />
      </ul>
    </nav>
  );
};

export default NavBar;
