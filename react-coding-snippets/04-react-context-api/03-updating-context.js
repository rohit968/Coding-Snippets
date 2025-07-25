// Topic: Updating Context
// Description: Sharing state and update function through Context
// Output: Toggle login status from child component

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const LoginToggle = () => {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  return (
    <button onClick={() => setLoggedIn(!loggedIn)}>
      {loggedIn ? "Logout" : "Login"}
    </button>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <LoginToggle />
    </AuthProvider>
  );
}
