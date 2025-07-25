// Topic: Nested Contexts
// Description: Using multiple context providers inside a component tree
// Output: Combines Auth and Theme Contexts

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const ThemeContext = createContext();

const useAuth = () => useContext(AuthContext);
const useTheme = () => useContext(ThemeContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("Guest");
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Dashboard = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  return (
    <p>
      Welcome {user}! Theme is <b>{theme}</b>
    </p>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </AuthProvider>
  );
}
