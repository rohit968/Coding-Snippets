// 06-programmatic-navigation.jsx
// 👇 Uses `useNavigate()` to navigate from code (e.g., after login or button click)

import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake login check (you can replace with real auth)
    if (username.trim()) {
      // ✅ Navigate programmatically
      navigate("/dashboard");
    } else {
      alert("Please enter a username");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>🔐 Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

function Dashboard() {
  return <h2>📊 Welcome to the Dashboard!</h2>;
}

export default function ProgrammaticNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

/*
📘 TOPIC: useNavigate() — Programmatic Navigation

🧠 DESCRIPTION:
This example demonstrates how to navigate users using JavaScript logic
(e.g., after login or form submission) using the `useNavigate()` hook from React Router v6.

- `useNavigate()` replaces the older `useHistory()` from v5.
- You can redirect users on success, logout, or specific events.

🧪 SCENARIO:
1. User enters their name and clicks "Login".
2. They are redirected to `/dashboard` using `navigate("/dashboard")`.

📤 OUTPUT:
- URL changes programmatically from `/` to `/dashboard`
- Conditional navigation controlled inside JS logic (no `<Link>` used)

🚀 TIP:
Always use programmatic navigation in places where UI logic decides the route,
like auth redirects, modals, or multi-step flows.
*/
