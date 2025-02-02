import React from "react";
import SkillSection from "./components/SkillSection"; // Import SkillSection

// App komponenten
const App = () => {
  return (
    <div className="App">
      <h1>Min Portfolio</h1>
      <SkillSection /> {/* Render SkillSection her */}
    </div>
  );
};

export default App;
