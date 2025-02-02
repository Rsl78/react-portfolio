import { ThemeContext } from "../context";
import PropTypes from "prop-types";
import {useState} from "react";

const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(true);
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