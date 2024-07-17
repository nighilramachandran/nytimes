import { createTheme, ThemeProvider } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";
import darkThemeOptions from "../styles/theme/DarkTheme";
import { ThemeContext } from "../context/Theme";
import lightThemeOptions from "../styles/theme/LightTheme";

// interfaces
interface ThemeProviderProps {
  children: ReactNode;
}

// create theme

// dark
const darkTheme = createTheme(darkThemeOptions);
const lightTheme = createTheme(lightThemeOptions);

const ThemeProviders: React.FC<ThemeProviderProps> = ({ children }) => {
  // states

  // theme
  const [theme, setTheme] = useState("dark");

  //

  let directionTheme = theme === "dark" ? darkTheme : lightTheme;

  // functions

  // Toggle Theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // effects

  useEffect(() => {
    setTheme(localStorage?.getItem("mode") ?? "dark");
  }, []);

  return (
    <ThemeProvider theme={directionTheme}>
      <ThemeContext.Provider value={[theme, toggleTheme]}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeProviders;
