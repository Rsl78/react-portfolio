
import {motion} from "framer-motion";
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
      <h2 className="dark:text-[#dddddd] font-primary font-bold text-3xl">
        skills
      </h2>
      <div className="my-1 w-10 h-1 mb-5 bg-[#987750]"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-7 mb-10 ">
        {/* Prgramming Language */}
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
          className="relative"
        >
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#987750] to-transparent"></div>
          <h3 className="dark:text-[#dddddd] font-primary font-bold text-xl">
            Programming Language
          </h3>
          <ul className="text-lg font-primary mt-3">
            <li>C</li>
            <li>C++</li>
            <li>C#</li>
            <li>Python</li>
          </ul>
        </motion.div>

        {/* Database */}
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
          className="relative"
        >
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#987750] to-transparent"></div>

          <h3 className="dark:text-[#dddddd] font-primary font-bold text-xl">
            Database
          </h3>
          <ul className="text-lg font-primary mt-3">
            <li>MySQL</li>
            <li>MsSQL</li>
            <li>MongoDB</li>
          </ul>
        </motion.div>

        {/* Frontend */}
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
          className="relative"
        >
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#987750] to-transparent"></div>

          <h3 className="dark:text-[#dddddd] font-primary font-bold text-xl">
            Front-end
          </h3>
          <ul className="text-lg font-primary mt-3">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
          </ul>
        </motion.div>

        {/* Data Analysis */}
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
          className="relative"
        >
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#987750] to-transparent"></div>

          <h3 className="dark:text-[#dddddd] font-primary font-bold text-xl">
            Data Analysis
          </h3>
          <ul className="text-lg font-primary mt-3">
            <li>Pandas</li>
            <li>Numpy</li>
            <li>Seaborn</li>
            <li>Matplotlib</li>
            <li>scikit-learn</li>
            <li>RapidMiner</li>
            <li>Weka</li>
            <li>PowerBi</li>
          </ul>
        </motion.div>

        {/* others */}
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
          className="relative"
        >
          <h3 className="dark:text-[#dddddd] font-primary font-bold text-xl">
            Tools & Others
          </h3>
          <ul className="text-lg font-primary mt-3">
            <li>git</li>
            <li>github</li>
            <li>Postman</li>
            <li>Jira</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>Office365 suits</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;
