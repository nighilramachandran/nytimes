import { createTheme, ThemeProvider } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";
import darkThemeOptions from "../styles/theme/DarkTheme";
import { ThemeContext } from "../context/Theme";

// interfaces
interface ThemeProviderProps {
  children: ReactNode;
}

// create theme
const darkTheme = createTheme(darkThemeOptions);

const ThemeProviders: React.FC<ThemeProviderProps> = ({ children }) => {
  // States

  // Theme
  const [theme, setTheme] = useState("dark");

  // Functions

  // Toggle Theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("mode", theme === "dark" ? "light" : "dark");
  };

  // Effects
  useEffect(() => {
    setTheme(localStorage?.getItem("mode") ?? "dark");
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <ThemeContext.Provider value={[theme, toggleTheme]}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeProviders;
