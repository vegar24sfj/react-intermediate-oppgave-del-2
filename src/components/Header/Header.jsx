import React from 'react';
import NavBar from './NavBar';
import HamburgerBar from './HamburgerBar';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <img src="/public/assets/logo.webp" alt="Logo" className="h-10" />
        <h1 className="text-2xl">My Portfolio</h1>
      </div>
      <NavBar />
      <HamburgerBar />
    </header>
  );
};

export default Header;
