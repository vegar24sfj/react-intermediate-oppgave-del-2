import React, { createContext, useState, useContext } from "react";

// Create Context for the contact form
const ContactContext = createContext();

// Custom hook to use ContactContext
export const useContact = () => {
  return useContext(ContactContext);
};

// ContactProvider component that will provide the context to the app
export const ContactProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  return (
    <ContactContext.Provider
      value={{ formData, setFormData, status, setStatus }}
    >
      {children}
    </ContactContext.Provider>
  );
};
