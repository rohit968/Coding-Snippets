// 09-protected-route.jsx
// 🔐 Protected Route Example using mock auth + conditional rendering

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";

// 🔑 Mock auth function (replace with real logic)
const isLoggedIn = false;

// 🔒 Protected Route Component
function ProtectedRoute({ redirectPath = "/login" }) {
  return isLoggedIn ? <Outlet /> : <Navigate to={redirectPath} replace />;
}

// Layout for Navigation
function Layout() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>🔐 Protected Route Demo</h2>
      <nav>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/dashboard" style={{ marginRight: "10px" }}>
          Dashboard
        </Link>
        <Link to="/login">Login</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

// Pages
function Home() {
  return <h3>🏠 Welcome to the Public Home Page</h3>;
}

function Dashboard() {
  return <h3>📊 Welcome to your Dashboard (Private)</h3>;
}

function Login() {
  return <h3>🔑 Please log in to access restricted areas</h3>;
}

export default function ProtectedRouteExample() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />

          {/* 🔐 Protected Route wrapper */}
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          {/* 🛑 404 fallback */}
          <Route path="*" element={<h3>404 - Not Found</h3>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/*
📘 TOPIC: Protected Routes in React Router v6+

🧠 DESCRIPTION:
This example wraps the private route (Dashboard) inside a `<Route element={<ProtectedRoute />}>`
to conditionally render the route based on `isLoggedIn` status.

✅ Ideal for:
- Authenticated dashboards
- Admin-only areas
- Role-based route access

📌 NOTE:
- Replace the `isLoggedIn` variable with real auth logic (e.g., Zustand, Context, or Firebase)
- `replace` prop avoids pushing the redirect path to history

📤 OUTPUT:
- `/` → Public Home
- `/login` → Public Login
- `/dashboard` → Redirects to `/login` if not logged in
*/
