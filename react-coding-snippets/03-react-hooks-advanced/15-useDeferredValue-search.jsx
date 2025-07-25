// 14-useDeferredValue-search.jsx
// ✅ Demonstrates useDeferredValue to delay re-rendering of a heavy filtered UI

import React, { useState, useDeferredValue } from "react";

const allItems = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

export default function UseDeferredValueExample() {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

  const filteredItems = allItems.filter((item) =>
    item.toLowerCase().includes(deferredSearch.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h2>useDeferredValue Example</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type to filter"
        style={{ padding: "0.5rem", width: "100%", marginBottom: "1rem" }}
      />

      <p>
        Showing results for: <strong>{deferredSearch}</strong>
      </p>

      <ul>
        {filteredItems.slice(0, 100).map((item, index) => (
          <li key={index}>{item}</li> // Limit to 100 results for performance
        ))}
      </ul>
    </div>
  );
}
