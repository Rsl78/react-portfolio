import { useState } from "react";
import { motion } from "framer-motion";
import { technicalSkills } from "../../data/index.js"
import LinearProgressWithLogo from "./LinearProgressWithLogo";

// Variants for the container to stagger children animations.
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Adjust delay between items here.
    },
  },
};

// Variants for each list item.
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const TechnicalSkillsSection = () => {
  // Default to the first main skill.
  const [selectedSkill, setSelectedSkill] = useState(technicalSkills[0]);

  return (
    <div className="relative">
      <div className="grid grid-cols-10 gap-4">
        {/* Left Section – 60% width: show sub skills with staggered animation */}
        <div className="col-span-7">
          {/* Using key on the container forces a re-render when selectedSkill changes */}
          <motion.div
            key={selectedSkill.id}
            className="space-y-4 pr-2 md:w-[80%]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {selectedSkill.options.map((option) => (
              <motion.div key={option.id} variants={itemVariants}>
                <LinearProgressWithLogo skill={option} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Section – 40% width: list main skills */}
        <div className="col-span-3 pl-1 md:pl-4">
          <h3 className="dark:text-[#dddddd] font-bold text-lg mb-2">
            Categories
          </h3>
          <ul>
            {technicalSkills.map((skill) => (
              <li
                key={skill.id}
                className={`cursor-pointer py-2 px-1 rounded mb-2 transition-colors duration-300
                  ${
                    selectedSkill.id === skill.id
                      ? "text-[#987750] border-l-3 font-medium px-2"
                      : "hover:text-[#987750]"
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
      <div className="absolute left-[70%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#987750] to-transparent"></div>
    </div>
  );
};

export default TechnicalSkillsSection;
