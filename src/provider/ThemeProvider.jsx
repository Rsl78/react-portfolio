import { ThemeContext } from "../context";
import PropTypes from "prop-types";
import {useState, useEffect} from "react";

const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(
      () =>
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    useEffect(() => {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e) => setDarkMode(e.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);
    
    return (
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default ThemeProvider;