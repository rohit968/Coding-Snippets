// 📌 Topic: Basic Routing with React Router v6
// 📖 Description: React Router enables navigation between pages without reloading.
// This snippet sets up two simple routes: Home and About.
// Uses BrowserRouter, Routes, Route from react-router-dom.

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => <h2>🏠 Home Page</h2>;
const About = () => <h2>ℹ️ About Page</h2>;

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

// 💡 Output:
// Clicking on "Home" shows "🏠 Home Page",
// Clicking on "About" shows "ℹ️ About Page"
// No page reloads.
