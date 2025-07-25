// 01-basic-routing.jsx
// 👇 Shows how to set up BrowserRouter, Routes, and basic Route components in React Router v6.21+

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Dummy Pages
const Home = () => <h2>🏠 Home Page</h2>;
const About = () => <h2>ℹ️ About Page</h2>;
const Contact = () => <h2>📞 Contact Page</h2>;

export default function BasicRoutingExample() {
  return (
    <BrowserRouter>
      <h1>🔗 React Basic Routing</h1>

      {/* Define routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

/*
📘 TOPIC: Basic Routing in React Router v6

🧠 DESCRIPTION:
This file demonstrates how to set up a basic router in a React app using React Router v6.
The <BrowserRouter> provides the routing context, <Routes> is the new switch mechanism, 
and each <Route> defines a specific path with its associated component.

📤 OUTPUT:
When the URL path matches:
- "/" → Displays 🏠 Home Page
- "/about" → Displays ℹ️ About Page
- "/contact" → Displays 📞 Contact Page

🚀 TIP:
To test this, import <BasicRoutingExample /> in your main App.jsx or index.jsx file 
and run the development server. Change the URL in the browser to switch routes.

*/
