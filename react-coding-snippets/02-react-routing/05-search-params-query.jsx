// 05-search-params-query.jsx
// 👇 Uses useSearchParams() to work with URL query strings like ?sort=asc

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
  Link,
} from "react-router-dom";

// ProductList page that reads query params
function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort") || "asc"; // default to asc

  const toggleSort = () => {
    setSearchParams({ sort: sortOrder === "asc" ? "desc" : "asc" });
  };

  return (
    <div>
      <h2>🛍️ Product List</h2>
      <p>
        Currently sorted: <strong>{sortOrder.toUpperCase()}</strong>
      </p>
      <button onClick={toggleSort}>Toggle Sort Order</button>
      <ul>
        {(sortOrder === "asc" ? [1, 2, 3] : [3, 2, 1]).map((item) => (
          <li key={item}>Product #{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function SearchParamsExample() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/products?sort=asc">View Products</Link>
      </nav>
      <Routes>
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

/*
📘 TOPIC: Search Params & Query Strings

🧠 DESCRIPTION:
This example demonstrates how to read and manipulate URL query strings in React Router v6+
using the `useSearchParams()` hook.
- Useful for filters, sorting, pagination, etc.
- Reactively reads the query string like `?sort=asc`.
- You can update it using `setSearchParams()` which triggers re-render.

📤 OUTPUT:
- URL: /products?sort=asc
- Clicking the toggle button changes it to /products?sort=desc and updates the list.
- Sort order is reflected directly in the URL.

🚀 TIP:
Query params are ideal for persisting UI state across refresh or sharing the link with others.
*/
