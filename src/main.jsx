import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import App component
import "./index.css"; // Import CSS styles

// Rendre App komponenten til root elementet i HTML
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App /> {/* Render App component */}
  </React.StrictMode>
);
