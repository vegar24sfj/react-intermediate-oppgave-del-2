import React, { useEffect, useRef } from "react";
import { useMenu } from "../../Context/MenuContext"; // Use the custom hook to access context
import NavItem from "./NavItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const MENU_LIST = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/projects", text: "Projects" },
  { to: "/contact", text: "Contact" },
  { to: "/skills", text: "Skills" },
];

const HamburgerBar = () => {
  const { menuOpen, toggleMenu } = useMenu();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close the menu if clicking outside of the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        toggleMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleMenu]);

  return (
    <div className="md:hidden">
      <button ref={buttonRef} onClick={toggleMenu}>
        <GiHamburgerMenu className="h-10 w-10 text-[var(--text-primary)]" />
      </button>

      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-0 bg-[var(--primary)] p-4 shadow-lg rounded-md w-48"
        >
          <button onClick={toggleMenu}>
            <IoCloseSharp className="h-10 w-10 absolute right-4 top-6 text-[var(--text-primary)]" />
          </button>

          <nav className="flex flex-col gap-8 justify-center items-center h-full">
            {MENU_LIST.map((item, index) => (
              <NavItem
                key={index}
                to={item.to}
                text={item.text}
                onClick={toggleMenu}
              />
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerBar;
