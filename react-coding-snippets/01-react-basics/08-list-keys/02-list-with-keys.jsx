// Topic: Using Unique Keys for List Rendering
// Description: React uses the key prop to identify elements and optimize re-rendering. This example uses objects with unique IDs — ideal for real-world lists from APIs or databases.

import React from "react";

function ListWithKeys() {
  const users = [
    { id: 1, name: "Rohit" },
    { id: 2, name: "Aisha" },
    { id: 3, name: "Karan" },
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li> // unique key = best practice
        ))}
      </ul>
    </div>
  );
}

export default ListWithKeys;

// User List ->
// • Rohit
// • Aisha
// • Karan

// 🧠 Tip: Avoid using Math.random() or index as key for dynamic lists. It breaks React’s diffing algorithm and causes bugs.
