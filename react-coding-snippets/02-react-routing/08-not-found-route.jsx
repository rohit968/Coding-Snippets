// 08-not-found-route.jsx
// 👇 Catch-all route using "*" to handle unknown or invalid URLs (404 Page)

import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

// Shared Layout with Nav
function Layout() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <header style={{ background: "#eee", padding: "10px" }}>
        <h2>🚧 Routing App</h2>
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/does-not-exist">Broken Link</Link>
        </nav>
      </header>

      <main style={{ marginTop: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

function Home() {
  return <h3>🏠 Welcome to the Home Page</h3>;
}

function About() {
  return <h3>📖 This is the About Page</h3>;
}

// 404 Page
function NotFound() {
  return (
    <div style={{ color: "red" }}>
      <h2>404 - Page Not Found</h2>
      <p>🚫 The page you are looking for doesn’t exist.</p>
      <Link to="/">🔙 Go back Home</Link>
    </div>
  );
}

export default function NotFoundRouteExample() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* 👇 Catch-all route MUST be last */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/*
📘 TOPIC: 404 Catch-All Routes in React Router v6+

🧠 DESCRIPTION:
If the user visits an undefined path (like `/random`), React Router will render
the element assigned to the wildcard path `*`. This is the preferred method to handle
404 pages with nested layouts using `<Route path="*" />`.

✅ Great for:
- Building user-friendly fallback pages
- Redirecting users to safe or known routes
- Debugging broken links during development

📤 OUTPUT:
Try visiting:
- `/about` → shows About Page
- `/xyz` → shows 404 message
- `/` → Home Page
- `/does-not-exist` → Broken route, triggers NotFound component

🧩 BONUS:
Style the 404 with fun messages or animations using Framer Motion.
*/
