// 📌 Topic: Auth Context with Context API
// 📖 Description: Centralizes authentication logic — login/logout — using a context. Any component can access auth state.
// 💡 Output: Components can check `isLoggedIn` and call `login()` or `logout()`.

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
