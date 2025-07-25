// 03-nested-routes.jsx
// 👇 Demonstrates parent/child routes using <Outlet> for shared layout (React Router v6.21+)

import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

// Layout component for shared UI
function DashboardLayout() {
  return (
    <div>
      <h1>📊 Dashboard</h1>
      <nav>
        <Link to="analytics" style={{ marginRight: "1rem" }}>
          Analytics
        </Link>
        <Link to="reports">Reports</Link>
      </nav>
      <hr />
      {/* Renders nested routes */}
      <Outlet />
    </div>
  );
}

// Nested child components
function Analytics() {
  return <h2>📈 Analytics Page</h2>;
}

function Reports() {
  return <h2>📋 Reports Page</h2>;
}

function Home() {
  return <h2>🏠 Home Page</h2>;
}

export default function NestedRoutesExample() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Parent Route with shared layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* Child Routes (rendered inside <Outlet />) */}
          <Route path="analytics" element={<Analytics />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/*
📘 TOPIC: Nested Routes with <Outlet>

🧠 DESCRIPTION:
This example illustrates how to use nested routes in React Router.
- A parent route (Dashboard) shares a layout with nested routes (Analytics, Reports).
- <Outlet /> acts as a placeholder where child components render.
- Helps avoid repeating layout across multiple child views.

📤 OUTPUT:
- Navigating to "/dashboard/analytics" renders Dashboard layout + Analytics content.
- Navigating to "/dashboard/reports" shows Dashboard layout + Reports content.
- <Link> handles navigation without page reload.

🚀 TIP:
Use nested routes with <Outlet> to build structured UIs with shared headers, navbars, or sidebars.
*/
