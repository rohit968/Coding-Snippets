// 07-layout-routes.jsx
// 👇 Shared layout UI (like headers or sidebars) across nested routes using <Outlet>

import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <header style={{ background: "#eee", padding: "10px" }}>
        <h2>🌐 My App</h2>
        <nav>
          <Link to="/home" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main style={{ marginTop: "20px" }}>
        {/* 👇 Nested child components will be rendered here */}
        <Outlet />
      </main>
    </div>
  );
}

function HomePage() {
  return <h3>🏠 This is the Home Page</h3>;
}

function AboutPage() {
  return <h3>ℹ️ This is the About Page</h3>;
}

export default function LayoutRoutesExample() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent route using Layout component */}
        <Route path="/" element={<Layout />}>
          {/* Child routes rendered inside <Outlet /> */}
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/*
📘 TOPIC: Shared Layouts with <Outlet>

🧠 DESCRIPTION:
This example shows how to create a shared layout that wraps multiple nested pages.
React Router’s <Outlet /> lets you insert child components into a layout.

✅ Great for:
- Common headers, navbars, sidebars
- Page shells across multiple routes

🛠 STRUCTURE:
- `/home` → shows HomePage inside Layout
- `/about` → shows AboutPage inside same Layout
- Navigation handled using <Link>

📤 OUTPUT:
Header and nav are persistent.
Main content changes based on route inside <Outlet>.

🧩 BONUS:
You can use nested routes with layouts to build admin panels, dashboards, or multistep forms.

*/
