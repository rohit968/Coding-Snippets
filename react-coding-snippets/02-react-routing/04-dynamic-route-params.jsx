// 04-dynamic-route-params.jsx
// 👇 Uses useParams() to extract dynamic route values like /user/:id

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

// Home component
function Home() {
  return (
    <div>
      <h2>🏠 Home Page</h2>
      <p>Click on a user to view their profile:</p>
      <ul>
        <li>
          <Link to="/user/101">User 101</Link>
        </li>
        <li>
          <Link to="/user/202">User 202</Link>
        </li>
        <li>
          <Link to="/user/303">User 303</Link>
        </li>
      </ul>
    </div>
  );
}

// UserProfile component with dynamic route param
function UserProfile() {
  const { id } = useParams(); // access route param `id`
  return (
    <div>
      <h2>👤 User Profile</h2>
      <p>
        Viewing details for User ID: <strong>{id}</strong>
      </p>
    </div>
  );
}

export default function DynamicRouteParamsExample() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

/*
📘 TOPIC: Dynamic Route Parameters

🧠 DESCRIPTION:
This example demonstrates how to create dynamic routes using `:param` syntax in React Router v6+.
- When a user visits a route like `/user/101`, the `UserProfile` component is rendered.
- `useParams()` extracts the dynamic `id` from the URL.
- Useful for user profiles, product details, blog posts, etc.

📤 OUTPUT:
- Visiting `/user/202` will display "Viewing details for User ID: 202".
- The `Home` component links to multiple dynamic user profile routes.

🚀 TIP:
Always validate or sanitize params before using them in API calls or rendering sensitive content.
*/
