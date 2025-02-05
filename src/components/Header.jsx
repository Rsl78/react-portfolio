import SideBar from "../components/SideBar";
import { ReactTyped } from "react-typed";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../context";
const Header = ({ headerRef }) => {
    const {darkMode, setDarkMode} = useContext(ThemeContext);

  return (
    <header
      ref={headerRef}
      className="border min-h-screen relative font-primary snap-start mb-10 "
    >
      {/* <h1 className="text-5xl font-bold ">rsl.</h1> */}
      {/* Animate Sidebar */}
      <SideBar />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className=" text-center font-lg font-tertiary text-2xl md:text-5xl leading-normal">
          Hello
        </h2>
        <h2 className=" text-center font-lg font-tertiary text-2xl md:text-5xl leading-normal">
          I am Roknuzzaman Rasel
        </h2>
        <h2 className=" text-center font-lg font-tertiary text-2xl md:text-5xl leading-normal">
          I am a{" "}
          <ReactTyped
            strings={[
              "Software Engineer",
              "Web Developer",
              "Frontend Developer",
            ]}
            typeSpeed={150}
            backSpeed={150}
            className="text-[#000000] dark:text-[#dddddd]"
            loop
          />
        </h2>
      </div>

      <button
        onClick={() => setDarkMode((darkMode) => !darkMode)}
        className=" text-[#000000] dark:text-[#dddddd] absolute text-xl bottom-28 right-0 transform -rotate-90 origin-bottom-right hover:text-gray-600 dark:hover:text-blue-50 font-semibold"
      >
        {darkMode ? "light mode" : "dark mode"}
      </button>
    </header>
  );
};

Header.propTypes = {
    headerRef: PropTypes.object,
}

export default Header;
