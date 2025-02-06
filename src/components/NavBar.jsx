import MenuIcon from "../ui/MenuIcon";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import { useContext } from "react";
import { ThemeContext } from "../context";

const NavBar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className=" bg-[#fff] dark:bg-[#1d1b19] dark:text-[#dddddd]  sticky top-0 z-50">
      <div className="navbar  md:w-[91%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <MenuIcon />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="font-semibold text-lg  ">contact</a>
              </li>

              <li>
                <a className="font-semibold text-lg  ">skills</a>
              </li>

              <li>
                <a className="font-semibold text-lg  ">about me</a>
              </li>
              <li>
                <a className="font-semibold text-lg  ">projects</a>
              </li>
              <li>
                <a className="font-semibold text-lg  ">home</a>
              </li>
            </ul>
          </div>
          <h1 className="text-5xl font-bold">rsl.</h1>
        </div>

        <div className="navbar-end lg:hidden">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
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
          <ul className="menu menu-horizontal ">
            <li>
              <a className="font-semibold text-lg  hover:text-gray-600 dark:hover:text-blue-50">
                contact
              </a>
            </li>

            <li>
              <a className="font-semibold text-lg hover:text-gray-600 dark:hover:text-blue-50">
                skills
              </a>
            </li>
            <li>
              <a className="font-semibold text-lg hover:text-gray-600 dark:hover:text-blue-50 ">
                about me
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-lg hover:text-gray-600 dark:hover:text-blue-50 "
                id="projects"
              >
                projects
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-lg hover:text-gray-600 dark:hover:text-blue-50 "
                href="#home"
              >
                home
              </a>
            </li>
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
