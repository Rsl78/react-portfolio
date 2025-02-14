import PropTypes from "prop-types";
import { useState, useEffect, useRef, useContext } from "react";
import { useInView } from "framer-motion";
import { ThemeContext } from "../../context";

const RadialProgress = ({ value = 80, title = "Progress" }) => {
  const size = 120;
  const duration = 2000;
  const strokeWidth = 10;
  // Calculate radius and circumference for the SVG circle.
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // State to hold the animated progress fraction (0 to value/100) and the displayed percentage.
  const [progressFraction, setProgressFraction] = useState(0);
  const [displayedPercentage, setDisplayedPercentage] = useState(0);
  const { darkMode } = useContext(ThemeContext);

  // Colors based on the theme.
  const fontColor = darkMode ? "#dddddd" : "#000000";
  const bgStrokeColor = darkMode ? "#888" : "#777777";

  // Create a ref and check if the component is in view.
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    // Start animation only when the component is in the viewport.
    if (!isInView) return;

    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1); // Clamp between 0 and 1.
      const currentPercentage = progress * value;
      setProgressFraction(currentPercentage / 100);
      setDisplayedPercentage(Math.floor(currentPercentage));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [duration, value, isInView]);

  // Calculate stroke-dashoffset based on progressFraction.
  const strokeDashoffset = circumference * (1 - progressFraction);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg width={size} height={size}>
          {/* Background circle (100% value) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={bgStrokeColor}
            strokeWidth={strokeWidth}
          />
          {/* Animated progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#987750"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        {/* Centered percentage text */}
        <div
          className="absolute text-xl font-bold"
          style={{ color: fontColor }}
        >
          {displayedPercentage}%
        </div>
      </div>
      {/* Title below the progress circle */}
      <div className="mt-4 text-base font-medium" style={{ color: fontColor }}>
        {title}
      </div>
    </div>
  );
};

RadialProgress.propTypes = {
  value: PropTypes.number,
  title: PropTypes.string,
};

export default RadialProgress;
