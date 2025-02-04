import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, text }) => {
  return (
    <li className="nav-item">
      <Link to={to} className="text-lg text-gray-700 hover:text-blue-500">
        {text}
      </Link>
    </li>
  );
};

export default NavItem;
