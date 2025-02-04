// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MenuProvider } from "./Context/MenuContext"; // Import MenuProvider
import Header from "./components/Header/Header"; // Import Header component
import SkillSection from "./components/Skills/SkillSection"; // Import SkillSection component

const App = () => {
  return (
    <MenuProvider>
      <Router>
        <Header />

        {/* Main content area */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route
              path="/"
              element={<div className="text-center text-2xl">Home Page</div>}
            />
            <Route
              path="/about"
              element={<div className="text-center text-2xl">About Page</div>}
            />
            <Route
              path="/projects"
              element={
                <div className="text-center text-2xl">Projects Page</div>
              }
            />
            <Route
              path="/contact"
              element={<div className="text-center text-2xl">Contact Page</div>}
            />
            <Route
              path="/skills"
              element={
                <div className="text-center text-2xl">
                  Skills
                  <SkillSection />
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </MenuProvider>
  );
};

export default App;
