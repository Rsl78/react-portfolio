import { useContext } from "react";
import PropTypes from "prop-types";
import SourceIcon from "../assets/icons/source.svg";
import SourceDarkIcon from "../assets/icons/sourceDark.svg";
import SourceHoverIcon from "../assets/icons/sourceHover.svg";

import WebsiteIcon from "../assets/icons/website.svg";
import WebsiteDarkIcon from "../assets/icons/websiteDark.svg";
import WebsiteHoverIcon from "../assets/icons/websiteHover.svg";
import { ThemeContext } from "../context";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const { darkMode } = useContext(ThemeContext);
  const { name, liveLink, githubLink, shortDescription, tools, picture } =
    project;
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: false }}
      // className="card backdrop-blur-lg w-auto rounded-xl  bg-black/2.5 dark:bg-white/0.75 "
      className="card backdrop-blur-lg w-auto rounded-xl  bg-black/4 dark:bg-white/0.75 "
    >
      <figure className="p-4 ">
        <img
          src={picture}
          alt="project image"
          className="rounded-xl w-full h-56 object-fit"
        />
      </figure>
      <div className="p-5">
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-bold dark:text-[#dddddd]">{name}</h2>
          <div className="flex space-x-2.5">
            <div className=" bg-black/5 dark:bg-white/3 rounded-full p-2 group">
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={darkMode ? WebsiteDarkIcon : WebsiteIcon}
                  alt="Website icon"
                  className="block group-hover:hidden"
                  height={20}
                  width={20}
                />
                <img
                  src={WebsiteHoverIcon}
                  alt="Source icon hover"
                  className="hidden group-hover:block"
                  height={20}
                  width={20}
                />
              </a>
            </div>
            <div className=" bg-black/5 dark:bg-white/3 rounded-full p-2 group">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={darkMode ? SourceDarkIcon : SourceIcon}
                  alt="Source icon"
                  className="block group-hover:hidden"
                  height={20}
                  width={20}
                />
                <img
                  src={SourceHoverIcon}
                  alt="Source icon hover"
                  className="hidden group-hover:block"
                  height={20}
                  width={20}
                />
              </a>
            </div>
          </div>
        </div>

        <p className="py-2">{shortDescription}</p>
        <div className="card-actions pt-1 dark:text-[#dddddd] justify-end">
          {tools.map((tool, index) => (
            <div
              key={index}
              className=" bg-black/5 dark:bg-white/3 text-sm rounded-sm font-semibold px-2 py-0.5"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = { project: PropTypes.object.isRequired };

export default ProjectCard;
