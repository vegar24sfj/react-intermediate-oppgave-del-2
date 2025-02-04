import React, { createContext, useState, useContext } from "react";

// Create context
const MenuContext = createContext();

// Create a provider component
export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false); // Local state for menu open

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

// Create a custom hook to use the MenuContext easily
export const useMenu = () => {
  return useContext(MenuContext);
};
