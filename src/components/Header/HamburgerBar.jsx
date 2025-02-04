import React, { useEffect, useRef } from "react";
import { useMenu } from "../../Context/MenuContext"; // Use the custom hook to access context
import NavItem from "./NavItem";

const HamburgerBar = () => {
  const { menuOpen, toggleMenu } = useMenu();
  const menuRef = useRef(null);
  const buttonRef = useRef(null); // Ref for the button

  // Close the menu if clicking outside of the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target) // Exclude button click
      ) {
        toggleMenu();
      }
    };

    // Adding event listener to detect clicks outside of the menu
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleMenu]);

  return (
    <div className="md:hidden">
      {/* Attach ref to the button to prevent it from closing the menu */}
      <button ref={buttonRef} className="text-3xl" onClick={toggleMenu}>
        &#9776;
      </button>
      {menuOpen && (
        <div
          ref={menuRef} // Attach ref to detect clicks inside the menu
          className="absolute top-16 right-0 bg-white p-4 shadow-lg rounded-md w-48"
        >
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
