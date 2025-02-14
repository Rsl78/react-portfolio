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
    <div ref={ref} className="flex items-center">
      {/* Left column: logo with title below */}
      <div className="flex flex-col  items-center w-18">
        <img src={Logo} alt="logo" className="w-6 h-6 object-contain" />
        <div className="mt-0.5 text-xs font-base" style={{ color: fontColor }}>
          {title}
        </div>
      </div>
      {/* Right column: progress bar */}
      <div className="ml-4 flex-1 relative">
        <div
          className="h-2 w-full rounded"
          style={{ backgroundColor: barBgColor }}
        ></div>
        <div
          className="h-2 rounded absolute top-0 left-0"
          style={{
            backgroundColor: progressFillColor,
            width: `${displayedPercentage}%`,
            transition: "width 0.1s linear",
          }}
        ></div>
        {/* Centered percentage text */}
        <div
          className="absolute inset-0 flex items-center justify-center text-[9px] font-base"
          style={{ color: fontColor }}
        >
          {displayedPercentage}%
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
