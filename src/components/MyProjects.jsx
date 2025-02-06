// import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
// import Modal from "./Modal";


const MyProjects = () => {
  // const [shoWModal, setShowModal] = useState(false);
  return (
    <section className="pb-10 min-h-screen" id="projects">
      {/* {shoWModal && <Modal />} */}
      <motion.div
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
        {/* Your Card components */}
        <div className="flex flex-col items-end pb-10">
          <h2 className="dark:text-[#dddddd] font-primary font-bold text-3xl mt-5">
            personal project
          </h2>
          <div className="my-1 w-20 h-1 bg-[#987750]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* <Card />
          <Card />
          <Card />
          <Card /> */}
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

        <div className="flex flex-col items-center justify-center pt-10">
          <div>
            <a
              className="dark:text-[#dddddd] hover:text-gray-600 dark:hover:text-blue-50 text-2xl font-semibold"
              href=""
            >
              See More Projects
            </a>
            <div className=" w-12 h-1 bg-[#987750]"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MyProjects;
