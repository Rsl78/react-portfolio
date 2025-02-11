import SideBar from "../components/SideBar";
// import ProfileImg from "../assets/image/rsl.jpg";
import { ReactTyped } from "react-typed";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../context";
import IconLine from "./IconLine";
const Header = ({ headerRef }) => {
    const {darkMode, setDarkMode} = useContext(ThemeContext);

  return (
    <header
      ref={headerRef}
      className="border min-h-screen relative font-primary snap-start mb-20 "
    >
      {/* <h1 className="text-5xl font-bold ">rsl.</h1> */}
      {/* Animate Sidebar */}
      <SideBar />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* <img src={ProfileImg} alt="profile image" className="rounded-full border-3 h-25 w-25" /> */}

        <h2 className="text-[#000000] dark:text-[#dddddd] text-center font-lg font-tertiary text-2xl md:text-4xl leading-normal">
          Hi,I&apos;m
        </h2>
        <h2 className="text-[#000000] dark:text-[#dddddd] text-center font-lg font-tertiary text-2xl md:text-4xl leading-normal">
          Md Roknuzzaman Rasel
        </h2>
        <h2 className="text-[#000000] dark:text-[#dddddd] text-center font-lg font-tertiary text-2xl md:text-4xl leading-normal">
          I am a{" "}
          <ReactTyped
            strings={[
              "software engineer",
              "web developer",
              "frontend developer",
            ]}
            typeSpeed={150}
            backSpeed={150}
            className="text-[#987750]"
            loop
          />
        </h2>
        <IconLine/>
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
