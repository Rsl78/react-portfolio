import { motion } from "framer-motion";
import TickIcon from "../ui/TickIcon";

const ResumeSection = () => {
  return (
    <>
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
        className="grid grid-cols-1 md:grid-cols-2 justify-between mb-20"
      >
        {/* experience */}
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
        >
          <h2 className="dark:text-[#dddddd] font-primary font-bold text-2xl mt-5">
            experience
          </h2>
          <div className="my-1 w-20 h-1 mb-5 bg-[#987750]"></div>
          <ul className="timeline timeline-snap-icon  timeline-compact timeline-vertical">
            {/* City Scape international LTD */}
            <li>
              <div className="timeline-middle">
                <TickIcon />
              </div>
              <div className="timeline-end pr-1 mb-5 ">
                <h2 className="text-xl font-semibold  dark:text-[#dddddd]">
                  Software Engineer (Intern)
                </h2>
                <p className="py-1 text-lg italic">
                  October, 2024 - December, 2024
                </p>
                <h3 className="text-base font-semibold dark:text-[#dddddd]">
                  Cityscape Internation Limited
                </h3>
                <h3 className="text-base font-semibold dark:text-[#dddddd]">
                  Dhaka, Bangladesh
                </h3>
              </div>
              <hr className="bg-[#000000] dark:bg-[#888]" />
            </li>

            {/* AIBIG */}
            <li>
              <hr className="bg-[#000000] dark:bg-[#888]" />
              <div className="timeline-middle">
                <TickIcon />
              </div>
              <div className="timeline-end pl-1 ">
                <h2 className="text-xl font-bold  dark:text-[#dddddd]">
                  Research Assistant
                </h2>
                <p className="py-1 text-lg italic">August, 2023 - April, 2024</p>
                <h3 className="text-base font-semibold dark:text-[#dddddd]">
                  Artifical Intelligence and Bioinformatics Research Group
                  (AIBIG), Universiti Teknologi Malaysia
                </h3>
                <h3 className="text-base font-semibold dark:text-[#dddddd]">
                  Johor, Malaysia
                </h3>
              </div>
              <hr className="bg-[#000000] dark:bg-[#888]" />
            </li>

            {/* SSC */}
          </ul>
        </motion.div>
        {/* Education Section */}
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
        >
          <h2 className="dark:text-[#dddddd] font-primary font-bold text-2xl  mt-20 md:mt-5  ">
            education
          </h2>
          <div className="my-1 w-20 h-1 mb-5 bg-[#987750]"></div>
          <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
            {/* Bachelor degree */}
            <li className="">
              <div className="timeline-middle">
                <TickIcon />
              </div>
              <div className="timeline-end pr-1 mb-5 ">
                <h2 className="text-xl font-bold  dark:text-[#dddddd]">
                  Bachelor Of Computer Science (Software Engineering)
                </h2>
                <p className="py-1 text-lg italic">
                  Februay, 2020 - April, 2024
                </p>
                <h3 className="text-base font-semibold dark:text-[#dddddd]">
                  Universiti Teknologi Malaysia
                </h3>
                <h3 className="text-base font-semibold dark:text-[#dddddd]">
                  Johor, Malaysia
                </h3>
              </div>
              <hr className="bg-[#000000] dark:bg-[#888]" />
            </li>

            {/* HSC */}
            <li>
              <hr className="bg-[#000000] dark:bg-[#888]" />
              <div className="timeline-middle">
                <TickIcon />
              </div>
              <div className="timeline-end pl-1 mb-5">
                <h2 className="text-xl font-bold  dark:text-[#dddddd]">
                  Higher Secondary School Certificate (Science)
                </h2>
                <p className="py-1 text-lg italic">May, 2015 - April, 2017</p>
                <h3 className="text-base font-semibold dark:text-[#dddddd]">
                  Police Lines School & College, Rangpur
                </h3>
                <h3 className="text-base font-semibold dark:text-[#dddddd]">
                  Rangpur, Bangladesh
                </h3>
              </div>
              <hr className="bg-[#000000] dark:bg-[#888]" />
            </li>

            {/* SSC */}
            <li>
              <hr className="bg-[#000000] dark:bg-[#888]" />
              <div className="timeline-middle">
                <TickIcon />
              </div>
              <div className="timeline-end pr-1 ">
                <h2 className="text-xl font-bold  dark:text-[#dddddd]">
                  Secondary School Certificate (Science)
                </h2>
                <p className="py-1 text-lg italic">
                  January, 2007 - February, 2015
                </p>
                <h3 className="text-base font-semibold dark:text-[#dddddd]">
                  Rangpur Zilla School
                </h3>
                <h3 className="text-base font-semibold dark:text-[#dddddd]">
                  Rangpur, Bangladesh
                </h3>
              </div>
              <hr className="bg-[#000000] dark:bg-[#888]" />
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ResumeSection;
