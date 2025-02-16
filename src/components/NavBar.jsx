import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "../ui/MenuIcon";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import { ThemeContext } from "../context";

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.15, // Stagger menu items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const NavBar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#fff] dark:bg-[#1d1b19] dark:text-[#dddddd] sticky top-0 z-50">
      <div className="navbar md:w-[91%] mx-auto">
        <div className="navbar-start">
          <div className="relative">
            <button
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon />
            </button>

            {/* Full-Screen Dropdown */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="fixed inset-0 bg-[#fff] dark:bg-[#1D1B19] flex flex-col items-center justify-center z-50"
                >
                  <motion.ul
                    className="space-y-6 text-center"
                    variants={dropdownVariants}
                  >
                    {["home", "about me", "projects", "blog", "contact me"].map(
                      (item, index) => (
                        <motion.li
                          key={index}
                          className="text-2xl font-semibold text-gray-800 dark:text-[#dddddd] hover:text-red-500 cursor-pointer"
                          variants={itemVariants}
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
                        </motion.li>
                      )
                    )}
                  </motion.ul>

                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-gray-700 dark:text-[#dddddd] text-3xl"
                  >
                    ✖
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <h1 className="text-5xl font-bold">rsl.</h1>
        </div>

        <div className="navbar-end lg:hidden">
          <li>
            <a
              className="bg-black/5 dark:bg-white/3 rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              <img
                src={darkMode ? Sun : Moon}
                width="32"
                height="32"
                alt="Moon"
              />
            </a>
          </li>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal">
            {["home", "about me", "projects", "blog", "contact me"].map(
              (item, index) => (
                <li key={index}>
                  <a className="font-semibold text-lg hover:text-gray-600 dark:hover:text-blue-50">
                    {item}
                  </a>
                </li>
              )
            )}
            <li>
              <a
                className="hover:text-gray-600 dark:hover:text-blue-50 rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode((darkMode) => !darkMode)}
              >
                <img
                  src={darkMode ? Sun : Moon}
                  width="32"
                  height="32"
                  alt="Moon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
