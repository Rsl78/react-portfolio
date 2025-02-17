import PropTypes from "prop-types";
import { useState, useEffect, useRef, useContext } from "react";
import { useInView } from "framer-motion";
import { ThemeContext } from "../../context";


const LinearProgressWithLogo = ({ skill }) => {
  const { value, title } = skill;
  const duration = 2000; // Animation duration in ms.
  const { darkMode } = useContext(ThemeContext);

  // Set theme-based colors.
 
  const barBgColor = darkMode ? "#888" : "#777777";
  const progressFillColor = "#987750";

  // State for the animated progress percentage.
  const [displayedPercentage, setDisplayedPercentage] = useState(20); // Start from 20%

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

      // Ensure progress starts at 20% and scales to the final value
      const currentPercentage = 20 + progress * (value - 20);
      setDisplayedPercentage(Math.floor(currentPercentage));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [duration, value, isInView]);

  return (
    <div ref={ref} className="flex flex-col ">
      <div className="pb-1.5">{title}</div>
      <div className=" flex-1 relative">
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

        <div
          style={{ left: `${displayedPercentage}%` }}
          className="absolute -top-8 transform -translate-x-1/2 transition-all duration-100 ease-linear bg-[#F2F2F2] dark:bg-[#292725] text-[#987750] text-xs px-1.5 py-1 rounded shadow-lg"
        >
          {displayedPercentage}%
          <span className="absolute bottom-[-7px] left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-[#F2F2F2] dark:border-t-[#292725]"></span>
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
