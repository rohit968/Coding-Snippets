// 10-router-config-array.jsx
// 📁 Routing using config-based route array (React Router v6+)

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRoutes,
  Navigate,
} from "react-router-dom";

// 🧭 Route Config Array
const routesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

// 🧩 Component to load routes from config
function AppRoutes() {
  const element = useRoutes(routesConfig);
  return element;
}

// 🧱 Layout for consistent nav UI
function Layout() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>📁 Route Config Example</h2>
      <nav>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: "10px" }}>
          About
        </Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <hr />
      <AppRoutes />
    </div>
  );
}

// 🔹 Pages
function Home() {
  return <h3>🏠 Home Page</h3>;
}

function About() {
  return <h3>ℹ️ About Page</h3>;
}

function Dashboard() {
  return <h3>📊 Dashboard Page</h3>;
}

export default function RouteConfigArrayExample() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

/*
📘 TOPIC: Route Config Arrays with `useRoutes()`

🧠 DESCRIPTION:
Instead of manually nesting `<Route>` components inside `<Routes>`, this approach defines all routes
in a centralized `routesConfig` array. `useRoutes()` takes that array and returns route-matched UI.

✅ Advantages:
- Clean separation of concerns
- Easier for large apps or dynamic route loading
- Integrates well with code-splitting

🧪 OUTPUT:
- `/` → Home Page
- `/about` → About Page
- `/dashboard` → Dashboard Page
- Unknown paths → Redirect to `/`
*/
