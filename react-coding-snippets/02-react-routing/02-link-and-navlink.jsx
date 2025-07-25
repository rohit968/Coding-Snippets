// 02-link-and-navlink.jsx
// 👇 Demonstrates internal navigation using <Link> and <NavLink> in React Router v6.21+

import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// Dummy Pages
const Home = () => <h2>🏠 Home Page</h2>;
const About = () => <h2>ℹ️ About Page</h2>;
const Contact = () => <h2>📞 Contact Page</h2>;

export default function LinkAndNavLinkExample() {
  return (
    <BrowserRouter>
      <h1>🔗 Link vs NavLink Demo</h1>

      {/* Navigation Links */}
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home (Link)
        </Link>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            marginRight: "1rem",
            color: isActive ? "green" : "black",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          About (NavLink)
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "green" : "black",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Contact (NavLink)
        </NavLink>
      </nav>

      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

/*
📘 TOPIC: Link and NavLink in React Router

🧠 DESCRIPTION:
This example demonstrates the use of <Link> and <NavLink> for internal navigation.
- <Link> is used for simple navigation without page reload.
- <NavLink> provides active styling to indicate the current route, which is useful for menus.

📤 OUTPUT:
- Renders a navigation menu with 3 links: Home, About, and Contact.
- NavLinks apply active styles (green color & underline) when the route is active.
- Clicking links updates the URL and content without reloading the page.

🚀 TIP:
Use <NavLink> for highlighting active tabs/menus in your apps.
*/
