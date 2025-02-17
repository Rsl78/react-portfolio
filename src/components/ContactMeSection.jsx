import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ThemeContext } from "../context";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [fieldValue, setFieldValue] = useState({
    id: crypto.randomUUID(),
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(fieldValue.email)) {
      formErrors.email = "Invalid email address!";
      isValid = false;
    }

    // Phone validation (Ensures 10-15 digits)
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(fieldValue.phone)) {
      formErrors.phone = "Phone number must be 10-15 digits!";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFieldValue({
      ...fieldValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill up the the form correctly!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: darkMode ? "dark" : "light",
      });
      return;
    }
    console.log(fieldValue);

    // EmailJs service ID, template Id and public Key
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    // template params
    const templateParams = {
      form_name: fieldValue.name,
      form_email: fieldValue.email,
      form_phone: fieldValue.phone,
      message: fieldValue.message,
      to_name: "Md Roknuzzaman Rasel",
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((resposne) => {
        console.log(resposne);
        toast.success("Message sent successfully!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: darkMode ? "dark" : "light",
        });
        setFieldValue({
          ...fieldValue,
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({});
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to send message. Try again later!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: darkMode ? "dark" : "light",
        });
      });
  };

  return (
    <>
      <ToastContainer />
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
        id="contact"
      >
        {/* Other content */}
        <aside className="md:col-span-5 w-[95%] gap-4 pb-5">
          <div className="pb-2">
            <h2 className="dark:text-[#dddddd] font-primary font-bold text-3xl">
              drop me a line
            </h2>
            <div className="w-20 my-1 h-1 bg-[#987750]"></div>
            <p className="pt-2 text-lg leading-7 tracking-tight whitespace-pre-line ">
              Share your thoughts, projects, or just say hi using the form below
              I&apos;ll get back to you soon! To know more about me, visit my
              social profile.
            </p>
          </div>

          {/* Email */}
          <div className=" flex  items-center space-x-2 group">
            <img
              className=" dark:border-[#dddddd] border-2 rounded-full w-8 h-8 p-1 group-hover:border-[#987750]"
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
              className=" dark:border-[#dddddd] border-2 rounded-full w-8 h-8 p-1 group-hover:border-[#987750]"
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
              className=" dark:border-[#dddddd] border-2 rounded-full w-8 h-8 p-1 group-hover:border-[#987750]"
              src={darkMode ? LocationIconDark : LocationIconLight}
              alt="location"
            />

            <div>
              <h3 className="font-bold text-lg  dark:text-[#dddddd]">
                Location
              </h3>
              <h4 className="text-base ">
                72, North Road, Dhanmondi, Dhaka, Bangladesh
              </h4>
            </div>
          </div>
          <div>
            <IconLine />
          </div>
        </aside>

        {/* Contact form */}
        <div className="pt-3 md:col-span-6 justify-items-end">
          <form className="space-y-4 w-full" onSubmit={handleSubmit}>
            {/* First row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Field */}
              <div className="flex flex-col w-full">
                <label className="relative w-full" htmlFor="name">
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={fieldValue.name}
                    onChange={handleChange}
                    className="w-full px-2.5 py-2 text-lg outline-none border-gray-300 dark:border-[#6e6a6a33] rounded hover:border-[#987750] duration-200 peer focus:border-[#987750] bg-inherit"
                  />
                  <span className="absolute left-0 top-[23%] px-1 tracking-wide pointer-events-none duration-200 ml-2 bg-[#fafafa] dark:bg-[#1d1b19] peer-focus:-translate-y-5.5 peer-valid:text-sm peer-valid:-translate-y-5.5">
                    Name *
                  </span>
                </label>
              </div>

              {/* Email Field */}
              <div className="flex flex-col w-full">
                <label className="relative w-full" htmlFor="email">
                  <input
                    required
                    type="text"
                    id="email"
                    name="email"
                    value={fieldValue.email}
                    onChange={handleChange}
                    className="w-full px-2.5 py-2 text-lg outline-none border-gray-300 dark:border-[#6e6a6a33] rounded hover:border-[#987750] duration-200 peer focus:border-[#987750] bg-inherit"
                  />
                  <span className="absolute left-0 top-[23%] px-1 tracking-wide pointer-events-none duration-200 ml-2 bg-[#fafafa] dark:bg-[#1d1b19] peer-focus:-translate-y-5.5 peer-valid:text-sm peer-valid:-translate-y-5.5">
                    Email *
                  </span>
                </label>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Second row - Phone */}
            <div className="flex flex-col items-center justify-center w-full">
              <label className="relative w-full" htmlFor="phone">
                <input
                  required
                  type="text"
                  id="phone"
                  name="phone"
                  value={fieldValue.phone}
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full px-2.5 py-2 text-lg outline-none border-gray-300 dark:border-[#6e6a6a33] rounded hover:border-[#987750] duration-200 peer focus:border-[#987750] bg-inherit"
                />
                <span className="absolute left-0 top-[23%] px-1 tracking-wide pointer-events-none duration-200 ml-2 bg-[#fafafa] dark:bg-[#1d1b19] peer-focus:-translate-y-5.5 peer-valid:text-sm peer-valid:-translate-y-5.5">
                  Phone *
                </span>
              </label>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 self-start">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Third row - Message */}
            <div className="flex flex-col items-center justify-center w-full">
              <label className="relative w-full" htmlFor="message">
                <textarea
                  required
                  id="message"
                  name="message"
                  value={fieldValue.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder=" "
                  className="w-full px-2.5 py-3 text-lg outline-none border-gray-300 dark:border-[#6e6a6a33] rounded hover:border-[#987750] duration-200 peer focus:border-[#987750] bg-inherit"
                ></textarea>
                <span className="absolute left-0 top-3 px-1 tracking-wide pointer-events-none duration-200 ml-2 bg-[#fafafa] dark:bg-[#1d1b19] peer-focus:-translate-y-5.5 peer-valid:text-sm peer-valid:-translate-y-5.5">
                  Message *
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button className="py-2 w-full border-2 dark:text-[#dddddd] hover:text-[#987750] font-bold text-xl dark:border-[#ffffff33] hover:border-[#987750] rounded">
              Contact Us
            </button>
          </form>
        </div>
      </motion.section>
    </>
  );
};

export default ContactMeSection;
