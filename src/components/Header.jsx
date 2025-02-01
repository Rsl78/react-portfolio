import SideBar from "../components/SideBar";
import { ReactTyped } from "react-typed";
import PropTypes from "prop-types";
const Header = ({ headerRef }) => {
    console.log(headerRef);
  return (
    <header
      ref={headerRef}
      className="border min-h-screen relative font-primary snap-start"
    >
      {/* <h1 className="text-5xl font-bold ">rsl.</h1> */}
      {/* Animate Sidebar */}
      <SideBar />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-black text-center font-tertiary text-5xl leading-normal">
          Hello
        </h2>
        <h2 className="text-black text-center font-tertiary text-5xl leading-normal">
          I am Roknuzzaman Rasel
        </h2>
        <h2 className="text-black text-center font-tertiary text-5xl leading-normal">
          I am a{" "}
          <ReactTyped
            strings={[
              "Software Engineer",
              "Web Developer",
              "Frontend Developer",
            ]}
            typeSpeed={150}
            backSpeed={150}
            loop
          />
        </h2>
      </div>

      <button className="absolute text-xl bottom-28 right-0 transform -rotate-90 origin-bottom-right hover:text-gray-900 font-semibold">
        dark mode.
      </button>
    </header>
  );
};

Header.propTypes = {
    headerRef: PropTypes.object,
}

export default Header;
