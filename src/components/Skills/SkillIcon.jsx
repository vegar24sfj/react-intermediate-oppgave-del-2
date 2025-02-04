import React from "react";

const SkillIcon = ({ icon, skillName, tooltip }) => {
  return (
    <div className="text-center" title={tooltip}>
      <img src={icon} alt={skillName} className="w-16 h-16 mb-2" />
      <p className="text-sm">{skillName}</p>
    </div>
  );
};

export default SkillIcon;
