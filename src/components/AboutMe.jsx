import { motion } from "framer-motion";
import InboxIcon from "../assets/inbox.svg";
import ArrowIcon from "../assets/arrow.svg";
const AboutMe = () => {
  return (
    <section className="p-5 min-h-screen" id="projects">
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
        <div className="flex flex-col items-start pt-10 pb-3">
          <h2 className="dark:text-[#dddddd] font-primary font-bold text-3xl mt-5">
            about me
          </h2>
          <div className="my-1 w-20 h-1 bg-[#987750]"></div>
        </div>
        <div>
          <p className="dark:text-[#888]  text-2xl font-primary md:max-w-[70%] leading-relaxed">
            {`I'm a Front-end Developer with over 3 years of
            hands on experience. I'm from Dhaka, Bangladesh. I code and create web elements
            for amazing people around the world. I like work with new people.
            New people are new experiences.`}
          </p>

          <div className=" ">
            <div className="mt-8 flex flex-col md:flex-row">
              <table className="table text-left text-lg  max-w-[70%]">
                <tr className="">
                  <th className="pl-0 pt-0  dark:text-[#dddddd]">NAME</th>
                  <th className="pt-0">Md Roknuzzaman Rasel</th>
                </tr>
                <tr>
                  <th className="pl-0 pt-0  dark:text-[#dddddd]">BIRTHDAY</th>
                  <th className="pt-0">7th January 1999</th>
                </tr>
                <tr>
                  <th className="pl-0 pt-0 dark:text-[#dddddd]">AGE</th>
                  <th className="pt-0">26 years</th>
                </tr>
                <tr>
                  <th className="pl-0 pt-0 dark:text-[#dddddd]">ADDRESS</th>
                  <th className="pt-0">Dhaka Bangladesh</th>
                </tr>
                <tr>
                  <th className="pl-0 pt-0 dark:text-[#dddddd]">PHONE</th>
                  <th className="pt-0">
                    <a href="tel:+8801762888622">(+880) 176 2888 622</a>
                  </th>
                </tr>
                <tr>
                  <th className="pl-0 pt-0 dark:text-[#dddddd]">EMAIL</th>
                  <th className="pt-0">
                    <a href="mailto:roknuzzaman.rasel78@gmail.com">
                      roknuzzaman.rasel78@gmail.com
                    </a>
                  </th>
                </tr>
                <tr>
                  <th className="pl-0 pt-0 dark:text-[#dddddd]">GITHUB</th>
                  <th className="pt-0">
                    <a href="https://github.com/Rsl78">
                      https://github.com/Rsl78
                    </a>
                  </th>
                </tr>
              </table>
              <div className=" flex flex-col items-center justify-center pr-20 mt-10 md:mt-0">
                <div className="resumo_fn_cv_btn ">
                  <a href="img/cv.jpg" download>
                    <span className="icon">
                      <img src={InboxIcon} alt="" className="fn__svg" />
                      <img src={ArrowIcon} alt="" className="fn__svg arrow" />
                    </span>
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
