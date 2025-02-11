import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context";

import EmailIconLight from "../assets/icons/emailLight.svg";
import EmailIconDark from "../assets/icons/emailDark.svg";
// import EmailIconHover from "../assets/icons/emailHover.svg";

import PhoneIconLight from "../assets/icons/phoneLight.svg";
import PhoneIconDark from "../assets/icons/phoneDark.svg";
// import PhoneIconHover from "../assets/icons/phoneHover.svg";

import LocationIconLight from "../assets/icons/locationLight.svg";
import LocationIconDark from "../assets/icons/locationDark.svg";
import IconLine from "./IconLine";
// import LocationIconHover from "../assets/icons/locationHover.svg";

const ContactMeSection = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: false }}
      className=" grid grid-cols-1 md:grid-cols-11 py-10 mx-auto container"
    >
      {/* Other content */}
      <aside className="md:col-span-5 w-[95%] gap-4">
        <div className="pb-2">
          <h2 className="dark:text-[#dddddd] font-primary font-bold text-3xl">
            drop me a line
          </h2>
          <div className="w-20 my-1 h-1 bg-[#987750]"></div>
          <p className="pt-2 text-lg leading-7 whitespace-pre-line ">
            Share your thoughts, projects, or just say hi using the form
            below, I&apos;ll get back to you soon!
          </p>
        </div>

        {/* Email */}
        <div className=" flex  items-center space-x-2 group">
          <img
            className=" dark:border-[#dddddd] border-2 rounded-full w-10 h-10 p-1 group-hover:border-[#987750]"
            src={darkMode ? EmailIconDark : EmailIconLight}
            alt="email"
          />
          

          <div>
            <h3 className="font-bold text-lg  dark:text-[#dddddd]">Email</h3>
            <h4 className="text-base ">roknuzzaman.rasel78@gmail.com</h4>
          </div>
        </div>

        {/* Phone */}
        <div className="py-1 flex  items-center space-x-2 group">
          <img
            className=" dark:border-[#dddddd] border-2 rounded-full w-10 h-10 p-1 group-hover:border-[#987750]"
            src={darkMode ? PhoneIconDark : PhoneIconLight}
            alt="Phone"
          />
          

          <div>
            <h3 className="font-bold text-lg  dark:text-[#dddddd]">Phone</h3>
            <h4 className="text-base ">+880 1762-888622</h4>
          </div>
        </div>

        {/* Location */}
        <div className=" flex  items-center space-x-2 group">
          <img
            className=" dark:border-[#dddddd] border-2 rounded-full w-10 h-10 p-1 group-hover:border-[#987750]"
            src={darkMode ? LocationIconDark : LocationIconLight}
            alt="location"
          />
      

          <div>
            <h3 className="font-bold text-lg  dark:text-[#dddddd]">Location</h3>
            <h4 className="text-base ">
              72, North Road, Dhanmondi, Dhaka, Bangladesh
            </h4>
          </div>
        </div>

        <p className="pt-2 text-lg leading-7 whitespace-pre-line ">
          Visit my social profile to know more about me.
        </p>
        <div>
          <IconLine />
        </div>
      </aside>

      {/* Contact form */}
      <div className=" pt-3 md:col-span-6 justify-items-end">
        <form className="space-y-4 w-full ">
          {/* First row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {/* Name field */}
            <div className="flex items-center justify-center w-full">
              <label className="relative w-full" htmlFor="">
                <input
                  required
                  type="text"
                  className="w-full px-2.5 py-2 text-lg outline-none border-1 dark:border-[#ffffff33] rounded hover:border-[#987750]  duration-200 peer focus:border-[#987750] bg-inherit"
                />
                <span className="absolute left-0 top-[23%] px-1  tracking-wide pointer-events-none duration-200 ml-2 bg-[#fafafa] dark:bg-[#1d1b19]  peer-focus:-translate-y-5.5 peer-valid:text-sm peer-valid:-translate-y-5.5">
                  Name *
                </span>
              </label>
            </div>
            {/* Email field */}
            <div className="flex items-center justify-center w-full">
              <label className="relative w-full" htmlFor="">
                <input
                  required
                  type="text"
                  className="w-full px-2.5 py-2 text-lg outline-none border-1 dark:border-[#ffffff33] rounded hover:border-[#987750]  duration-200 peer focus:border-[#987750] bg-inherit"
                />
                <span className="absolute left-0 top-[23%] px-1  tracking-wide pointer-events-none duration-200 ml-2 bg-[#fafafa] dark:bg-[#1d1b19]  peer-focus:-translate-y-5.5 peer-valid:text-sm peer-valid:-translate-y-5.5">
                  Email *
                </span>
              </label>
            </div>
          </div>

          {/* Second row */}
          <div className="flex items-center justify-center w-full">
            <label className="relative w-full" htmlFor="">
              <input
                required
                type="text"
                autoComplete="off"
                className="w-full px-2.5 py-2 text-lg outline-none border-1 dark:border-[#ffffff33] rounded hover:border-[#987750]  duration-200 peer focus:border-[#987750]   bg-inherit"
              />
              <span className="absolute left-0 top-[23%] px-1  tracking-wide pointer-events-none duration-200 ml-2 bg-[#fafafa] dark:bg-[#1d1b19]  peer-focus:-translate-y-5.5 peer-valid:text-sm peer-valid:-translate-y-5.5">
                Phone *
              </span>
            </label>
          </div>

          {/* Third row */}

          <div className="flex items-center justify-center w-full">
            <label className="relative w-full" htmlFor="message">
              <textarea
                required
                id="message"
                name="message"
                rows="5"
                placeholder=" "
                className="w-full  px-2.5 py-3 text-lg outline-none border-1 dark:border-[#ffffff33] rounded hover:border-[#987750] duration-200 peer focus:border-[#987750] bg-inherit "
              ></textarea>
              <span className="absolute left-0 top-3 px-1  tracking-wide pointer-events-none duration-200 ml-2 bg-[#fafafa] dark:bg-[#1d1b19]  peer-focus:-translate-y-5.5 peer-valid:text-sm peer-valid:-translate-y-5.5">
                Message *
              </span>
            </label>
          </div>

          <button className=" py-2 w-full border-2 dark:text-[#dddddd]  hover:text-[#987750] font-bold text-xl  dark:border-[#ffffff33]  hover:border-[#987750]  rounded">
            Contact Us
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactMeSection;
