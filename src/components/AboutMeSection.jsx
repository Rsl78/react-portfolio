import styles from "./AboutMeSection.module.css";

import { motion } from "framer-motion";
import InboxIcon from "../assets/icons/inbox.svg";
import ArrowIcon from "../assets/icons/arrow.svg";

const AboutMeSection = () => {
  return (
    <section className="mb-20" id="about">
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
        <div className="flex flex-col items-start mb-3 ">
          <h2 className="dark:text-[#dddddd] font-primary font-bold text-3xl">
            about me
          </h2>
          <div className="my-1 w-20 h-1 mb-3 bg-[#987750]"></div>
        </div>
        <div>
          <p className="dark:text-[#888]  text-2xl font-primary md:max-w-[80%] leading-8 tracking-wide">
            {`I'm a passionate Front-end Developer from Dhaka, Bangladesh. I thrive on creating dynamic web elements and enjoy the creativity and innovation that comes from collaborating with talented individuals.`}
          </p>

          <div className=" ">
            <div className="mt-8 flex flex-col md:flex-row">
              <table className="table text-left text-lg  max-w-[70%]">
                <tr className="">
                  <th className="pl-0 pt-0  dark:text-[#dddddd]">NAME</th>
                  <th className="pt-0 font-medium">Md Roknuzzaman Rasel</th>
                </tr>
                <tr>
                  <th className="pl-0 pt-0  dark:text-[#dddddd]">BIRTHDAY</th>
                  <th className="pt-0 font-medium">7th January 1999</th>
                </tr>
                <tr>
                  <th className="pl-0 pt-0 dark:text-[#dddddd]">AGE</th>
                  <th className="pt-0 font-medium">26 years</th>
                </tr>
                <tr>
                  <th className="pl-0 pt-0 dark:text-[#dddddd]">ADDRESS</th>
                  <th className="pt-0 font-medium">Dhaka Bangladesh</th>
                </tr>
                <tr>
                  <th className="pl-0 pt-0 dark:text-[#dddddd]">PHONE</th>
                  <th className="pt-0 font-medium">
                    <a href="tel:+8801762888622">(+880) 176 2888 622</a>
                  </th>
                </tr>
                <tr>
                  <th className="pl-0 pt-0 dark:text-[#dddddd]">EMAIL</th>
                  <th className="pt-0 font-medium">
                    <a href="mailto:roknuzzaman.rasel78@gmail.com">
                      roknuzzaman.rasel78@gmail.com
                    </a>
                  </th>
                </tr>
                <tr>
                  <th className="pl-0 pt-0 dark:text-[#dddddd]">LINKEDIN</th>
                  <th className="pt-0 font-medium">
                    <a href="https://www.linkedin.com/in/rsl78/">
                      www.linkedin.com/in/rsl78/
                    </a>
                  </th>
                </tr>
              </table>
              <div className=" flex flex-col justify-center pr-20 mt-10 md:mt-0">
                <div className={styles.resumo_fn_cv_btn}>
                  <a href="img/cv.jpg" download>
                    <span className={styles.icon}>
                      <img src={InboxIcon} alt="" className={styles.fn__svg} />
                      <img
                        src={ArrowIcon}
                        alt=""
                        className={`${styles.fn__svg} ${styles.arrow}`}
                      />
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

export default AboutMeSection;
