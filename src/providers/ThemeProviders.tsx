import { createTheme, ThemeProvider } from "@mui/material";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import darkThemeOptions from "../styles/theme/DarkTheme";
import { ThemeContext } from "../context/Theme";
import lightThemeOptions from "../styles/theme/LightTheme";

// Interfaces
interface ThemeProviderProps {
  children: ReactNode;
}

// Create themes
const darkTheme = createTheme(darkThemeOptions);
const lightTheme = createTheme(lightThemeOptions);

const ThemeProviders: React.FC<ThemeProviderProps> = ({ children }) => {
  // State
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("mode") || "dark"
  );

  // Memoized theme object
  const directionTheme = useMemo(() => {
    return theme === "dark" ? darkTheme : lightTheme;
  }, [theme]);

  // Toggle Theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Effects
  useEffect(() => {
    localStorage.setItem("mode", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={directionTheme}>
      <ThemeContext.Provider value={[theme, toggleTheme]}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeProviders;
