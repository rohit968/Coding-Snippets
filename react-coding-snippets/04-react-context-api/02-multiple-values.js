// Topic: Context API
// Description: Passing multiple values using object in Context
// Output: Displays name and role from Context

import React, { createContext, useContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = { name: "Rohit", role: "Baker & Dev" };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

const UserInfo = () => {
  const { name, role } = useContext(UserContext);
  return (
    <p>
      {name} is a {role}.
    </p>
  );
};

export default function App() {
  return (
    <UserProvider>
      <UserInfo />
    </UserProvider>
  );
}
