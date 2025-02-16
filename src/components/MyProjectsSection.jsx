import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { personalProjects } from "../data";

const MyProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3); // Show 3 projects initially

  const handleSeeMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <section className="mb-20" id="projects">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1 },
          exit: { opacity: 0, x: -50 },
        }}
        viewport={{ once: false }}
      >
        <div className="flex flex-col items-end">
          <h2 className="dark:text-[#dddddd] font-primary font-bold text-3xl">
            Personal Projects
          </h2>
          <div className="my-1 w-20 h-1 bg-[#987750]"></div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {personalProjects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* "See More" Button */}
        {visibleProjects < personalProjects.length && (
          <div className="flex flex-col items-center justify-center pt-10">
            <button
              onClick={handleSeeMore}
              className="dark:text-[#dddddd] hover:text-gray-600 dark:hover:text-blue-50 text-2xl font-semibold"
            >
              See More Projects
            </button>
            <div className="w-12 h-1 bg-[#987750]"></div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default MyProjectsSection;
