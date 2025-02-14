import { useState } from "react";
import { technicalSkills } from "../../data/tecnicalSkills";
import LinearProgressWithLogo from "./LinearProgressWithLogo";

const TechnicalSkillsSection = () => {
  // Default to the first main skill
  const [selectedSkill, setSelectedSkill] = useState(technicalSkills[0]);

  return (
    <div className="relative">
      <div className="grid grid-cols-10 gap-4">
        {/* Left Section – 60% width: show sub skills */}
        <div className="col-span-6">
          <div className="space-y-3 pr-2">
            {selectedSkill.options.map((option) => (
              <LinearProgressWithLogo key={option.id} skill={option} />
            ))}
          </div>
        </div>

        {/* Right Section – 40% width: list main skills */}
        <div className="col-span-4 pl-1 md:pl-4">
          <h3 className="dark:text-[#dddddd] font-bold text-lg mb-2">
            Categories
          </h3>
          <ul>
            {technicalSkills.map((skill) => (
              <li
                key={skill.id}
                className={`cursor-pointer py-2 px-1 rounded mb-2 border 
                  ${
                    selectedSkill.id === skill.id
                      ? "border-[#987750] bg-[#987750] text-white"
                      : "border-transparent hover:border-[#987750]"
                  }`}
                onClick={() => setSelectedSkill(skill)}
              >
                {skill.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Divider between left and right sections */}
      <div className="absolute left-[60%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#987750] to-transparent"></div>
    </div>
  );
};

export default TechnicalSkillsSection;
