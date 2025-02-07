import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MenuProvider } from "./Context/MenuContext";
import { ContactProvider } from "./components/ContactForm/ContactContext";
import Header from "./components/Header/Header";
import SkillSection from "./components/Skills/SkillSection";
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
  return (
    <MenuProvider>
      <ContactProvider>
        <Router>
          <Header />

          {/* Main content area */}
          <div className="container mx-auto p-4 pt-32">
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
                element={
                  <div className="text-center text-2xl">
                    <ContactForm />
                  </div>
                }
              />
              <Route
                path="/skills"
                element={
                  <div className="text-center text-2xl">
                    <SkillSection />
                  </div>
                }
              />
            </Routes>
          </div>
        </Router>
      </ContactProvider>
    </MenuProvider>
  );
};

export default App;
