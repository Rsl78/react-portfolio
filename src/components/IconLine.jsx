import { useContext, useState } from "react";
import { ThemeContext } from "../context";
import PropTypes from "prop-types";

import LinkedInIconLight from "../assets/icons/linkedinLight.svg";
import GithubIconLight from "../assets/icons/githubLight.svg";
import InstagramIconLight from "../assets/icons/instagramLight.svg";
import FacebookIconLight from "../assets/icons/facebookLight.svg";

import LinkedInIconDark from "../assets/icons/linkedinDark.svg";
import GithubIconDark from "../assets/icons/githubDark.svg";
import InstagramIconDark from "../assets/icons/instagramDark.svg";
import FacebookIconDark from "../assets/icons/facebookDark.svg";

const icons = [
  {
    lightIcon: LinkedInIconLight,
    darkIcon: LinkedInIconDark,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rsl78/",
  },
  {
    lightIcon: GithubIconLight,
    darkIcon: GithubIconDark,
    label: "gitHub",
    href: "https://github.com/Rsl78",
  },
  {
    lightIcon: InstagramIconLight,
    darkIcon: InstagramIconDark,
    label: "instagram",
    href: "",
  },
  {
    lightIcon: FacebookIconLight,
    darkIcon: FacebookIconDark,
    label: "facebook",
    href: "",
  },
];

const IconCircle = ({ icon, isActive, onHover }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <a
      href={icon.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onHover}
      className="group inline-block"
    >
      <div
        className={`flex items-center h-11 border-3 dark:border-[#ffffff] rounded-full transition-all duration-300 overflow-hidden ${
          isActive ? "w-30" : "w-11"
        }`}
      >
        <div className="flex-shrink-0  pr-1 flex items-center justify-center w-11 h-11 ">
          <img
            src={darkMode ? icon.darkIcon : icon.lightIcon}
            alt={icon.label}
            className="w-8 h-8 p-1"
          />
        </div>
        <span
          className={` font-bold text-sm dark:text-[#ffffff] transition-all duration-300 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {icon.label}
        </span>
      </div>
    </a>
  );
};

const IconLine = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex items-center pt-3 space-x-4">
      {icons.map((icon, index) => (
        <IconCircle
          key={index}
          icon={icon}
          isActive={activeIndex === index}
          onHover={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

IconCircle.propTypes = {
  icon: PropTypes.object,
  isActive: PropTypes.bool,
  onHover: PropTypes.func,
};
export default IconLine;
