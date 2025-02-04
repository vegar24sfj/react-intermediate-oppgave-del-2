import React from "react";
import SkillIcon from "./SkillIcon";
import skillsData from "../../data/Skills.json";

const SkillSection = () => {
  return (
    <section className="text-center p-8">
      <h2 className="text-2xl font-semibold mb-4">Mine ferdigheter</h2>
      <p className="mb-8">
        Her er en liste over teknologiene og ferdighetene jeg behersker:
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {skillsData.map((skill, index) => (
          <SkillIcon
            key={index}
            icon={skill.icon}
            skillName={skill.skillName}
            tooltip={skill.tooltip}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
