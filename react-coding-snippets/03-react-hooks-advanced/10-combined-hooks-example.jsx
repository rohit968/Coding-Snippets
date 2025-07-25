// 10-combined-hooks-example.jsx
// Topic: Combined React Hooks
// Description:
// This component demonstrates the use of multiple React hooks together:
// useState, useEffect, useRef, useMemo, and useCallback in a realistic component.

import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";

function CombinedHooksExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  // useEffect to focus input on first render
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // useMemo to compute squared count only when count changes
  const squared = useMemo(() => {
    console.log("Calculating squared value...");
    return count * count;
  }, [count]);

  // useCallback to memoize the increment function
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Combined Hooks Example</h2>

      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />

      <p>Hello, {name || "Guest"} 👋</p>

      <p>Count: {count}</p>
      <p>Squared Count (memoized): {squared}</p>

      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default CombinedHooksExample;
