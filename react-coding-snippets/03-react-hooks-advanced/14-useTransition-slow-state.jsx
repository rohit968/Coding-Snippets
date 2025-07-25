// 13-useTransition-slow-state.jsx
// ✅ Demonstrates useTransition for deferring slow state updates (Concurrent Rendering)

import React, { useState, useTransition } from "react";

// Simulate a heavy list generation
function generateItems(input) {
  const items = [];
  for (let i = 0; i < 10000; i++) {
    items.push(`${input} - Item ${i + 1}`);
  }
  return items;
}

export default function UseTransitionExample() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      const items = generateItems(value);
      setList(items);
    });
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h2>useTransition Example</h2>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type to generate list"
        style={{ padding: "0.5rem", width: "100%", marginBottom: "1rem" }}
      />

      {isPending && <p>Loading slow state...</p>}

      <ul>
        {list.slice(0, 100).map((item, index) => (
          <li key={index}>{item}</li> // limit render for demo
        ))}
      </ul>
    </div>
  );
}
