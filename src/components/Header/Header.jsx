// src/components/Header/Header.jsx
import React, { useState } from "react";
import NavBar from "./NavBar";
import HamburgerBar from "./HamburgerBar";

const Header = () => {
  // State for toggling the hamburger menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the hamburger menu open/close
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      id="hjem"
      className="bg-[var(--primary)] text-white fixed w-full z-50 flex flex-col justify-center"
    >
      <div className="flex items-center justify-between px-4 lg:px-12">
      <div className="p-4">
          <img src="/assets/logo.webp" alt="Logo" className="h-16" />
        </div>

        {/* Desktop NavBar (visible on larger screens) */}
        <NavBar />

        {/* Hamburger Menu for smaller screens */}
        <HamburgerBar
          isOpen={isOpen}
          handleMenuToggle={handleMenuToggle}
          setIsOpen={setIsOpen}
        />
      </div>
    </header>
  );
};

export default Header;
