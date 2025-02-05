import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.section
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
      className=" grid grid-cols-1 md:grid-cols-8 gap-4 py-10 mx-auto container"
    >
      {/* Other content */}
      <aside className="md:col-span-3 f-full ">
        <h2 className="dark:text-[#dddddd] font-primary font-bold text-3xl">
          drop me a line
        </h2>
        <div className="w-20 my-1 h-1 bg-[#987750]"></div>
        <p className="pt-5 text-2xl leading-7 lg:leading-12 tracking-tight whitespace-pre-line ">
          If you have any suggestion, project or even you want to say “hello”,
          please fill out the form below and I will reply you shortly.
        </p>
      </aside>

      {/* Contact form */}
      <div className=" pt-3 md:col-span-5 justify-items-end">
        <form className="space-y-4 w-full lg:w-[85%]">
          {/* First row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {/* Name field */}
            <div className="flex items-center justify-center w-full">
              <label className="relative w-full" htmlFor="">
                <input
                  required
                  type="text"
                  className="w-full px-2.5 py-2 text-lg outline-none border-1 dark:border-[#ffffff33] rounded hover:border-gray-600 duration-200 peer focus:border-[#987750] bg-inherit"
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
                  className="w-full px-2.5 py-2 text-lg outline-none border-1 dark:border-[#ffffff33] rounded hover:border-gray-600 duration-200 peer focus:border-[#987750] bg-inherit"
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
                className="w-full px-2.5 py-2 text-lg outline-none border-1 dark:border-[#ffffff33] rounded hover:border-gray-600 duration-200 peer focus:border-[#987750]   bg-inherit"
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
                className="w-full  px-2.5 py-3 text-lg outline-none border-1 dark:border-[#ffffff33] rounded hover:border-gray-600 duration-200 peer focus:border-[#987750] bg-inherit "
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

export default ContactForm;
