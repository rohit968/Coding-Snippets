// Topic: useEffect - Fetch API Data
// Description: Fetches users from an API and displays them
// Output: Lists user names after fetching from API

import React, { useEffect, useState } from "react";

function FetchUsersAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    getUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default FetchUsersAPI;
