// 📌 Topic: Nested Routes in React Router v6
// 📖 Description: Nested routing allows a parent component to have child routes.
// This helps in layout-based routing (e.g., dashboards or sections inside pages).

import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

const Dashboard = () => (
  <>
    <h2>📊 Dashboard</h2>
    <nav>
      <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
    </nav>
    <Outlet /> {/* Nested route outlet */}
  </>
);

const Profile = () => <p>👤 Profile Section</p>;
const Settings = () => <p>⚙️ Settings Section</p>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// 💡 Output:
// URL: /profile → shows 👤 Profile Section under Dashboard
// URL: /settings → shows ⚙️ Settings Section under Dashboard
