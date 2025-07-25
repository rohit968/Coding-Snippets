// Topic: Context API + Custom Hook
// Description: Creating a custom hook to consume Context
// Output: Cleaner syntax for consuming context values

import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeSwitcher = () => {
  const { theme, toggle } = useTheme();
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggle}>Toggle Theme</button>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}
