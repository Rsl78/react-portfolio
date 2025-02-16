


import PropTypes from "prop-types";
import { useState, useEffect, useRef, useContext } from "react";
import { useInView } from "framer-motion";
import { ThemeContext } from "../../context";
import Logo from "../../assets/icons/githubDark.svg";

const LinearProgressWithLogo = ({ skill }) => {
  const { value, title } = skill;
  const duration = 2000; // Animation duration in ms.
  const { darkMode } = useContext(ThemeContext);

  // Set theme-based colors.
  const fontColor = darkMode ? "#dddddd" : "#000000";
  const barBgColor = darkMode ? "#888" : "#777777";
  const progressFillColor = "#987750";

  // State for the animated progress percentage.
  const [displayedPercentage, setDisplayedPercentage] = useState(0);

  // Ref and inView detection.
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const currentPercentage = progress * value;
      setDisplayedPercentage(Math.floor(currentPercentage));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [duration, value, isInView]);

  return (
    <div ref={ref} className="flex -ml-3 items-center relative">
      {/* Left column: logo with title below */}
      <div className="flex flex-col items-center w-18">
        <img src={Logo} alt="logo" className="w-6 h-6 object-contain" />
        <div className="mt-0.5 text-xs font-base" style={{ color: fontColor }}>
          {title}
        </div>
      </div>
      {/* Right column: progress bar with tooltip */}
      <div className="ml-1 md:ml-4 flex-1 relative">
        <div
          className="h-0.25 w-full rounded"
          style={{ backgroundColor: barBgColor }}
        ></div>
        <div
          className="h-0.25 rounded absolute top-0 left-0"
          style={{
            backgroundColor: progressFillColor,
            width: `${displayedPercentage}%`,
            transition: "width 0.1s linear",
          }}
        ></div>
        {/* Tooltip that follows the progress fill */}
        {/* <div
          style={{ left: `${displayedPercentage}%` }}
          className="absolute -top-6 transform -translate-x-1/2 transition-all duration-100 ease-linear text-white text-xs px-1 py-0.5 rounded"
        >
          {displayedPercentage}%
        </div> */}
        <div
          style={{ left: `${displayedPercentage}%` }}
          className="absolute -top-8 transform -translate-x-1/2 transition-all duration-100 ease-linear bg-[#292725] text-[#987750] text-xs px-1.5 py-1 rounded shadow-lg"
        >
          {displayedPercentage}%{/* Arrow at the bottom of the tooltip */}
          <span className="absolute bottom-[-7px] left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-[#292725]"></span>
        </div>
      </div>
    </div>
  );
};

LinearProgressWithLogo.propTypes = {
  skill: PropTypes.shape({
    value: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default LinearProgressWithLogo;
