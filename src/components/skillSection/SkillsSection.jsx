// import RadialProgress from "./RadialProgress";
import TechnicalSkillsSection from "./TechnicalSkillsSection";
import { motion } from "framer-motion";
const SkillsSection = () => {
  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
        exit: { opacity: 0, x: -50 },
      }}
      viewport={{ once: false }}
    >
  
        
          {/* Technical Skills */}
          <div className=" rounded">
            <h2 className="dark:text-[#dddddd] font-primary font-bold text-2xl">
              skills
            </h2>
            <div className="my-1 w-10 h-1 mb-3 bg-[#987750]"></div>
            <div className="">
              <TechnicalSkillsSection />
            </div>
          </div>

          {/* Professional Skills */}
          {/* <div className="col-span-2  rounded">
            <h2 className="dark:text-[#dddddd] font-primary font-bold text-xl">
              professional skills
            </h2>
            <div className="my-1 w-10 h-1 mb-3 bg-[#987750]"></div>
            <div className="grid min-w-85 grid-cols-2 gap-4">
              <RadialProgress value={70} title="Project Management" />
              <RadialProgress value={65} title="Agile Methodologies" />
              <RadialProgress value={80} title="Communication" />
              <RadialProgress value={75} title="Problem Solving" />
            </div>
          </div> */}
        
    
    </motion.div>
  );
};

export default SkillsSection;
