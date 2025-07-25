// Topic: React Context API
// Description: Creating and using a basic Context Provider & Consumer
// Output: Displays user name from Context

import React, { createContext, useContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = "Rohit Tiwari";
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

const ShowUser = () => {
  const user = useContext(UserContext);
  return <h2>Hello, {user} 👋</h2>;
};

export default function App() {
  return (
    <UserProvider>
      <ShowUser />
    </UserProvider>
  );
}
