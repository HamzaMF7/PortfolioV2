import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ThemeWrapper = (props) => {
  const { isDarkMode } = useSelector((state) => state.theme);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);
  return (
    <div className={isDarkMode ? "darkTheme" : "lightTheme"}>{props.children}</div>
  );
};

export default ThemeWrapper;
