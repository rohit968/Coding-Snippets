// 03-useCallback-performance.jsx
// Topic: useCallback to prevent unnecessary re-renders
// Description:
// This example shows how `useCallback` prevents re-creation of functions passed as props.
// It’s useful for performance when passing callbacks to child components.

import React, { useState, useCallback } from "react";

// Child component that only re-renders when its props change
const Child = React.memo(({ onIncrement }) => {
  console.log("🔁 Child rendered");
  return (
    <div style={{ marginTop: "10px" }}>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
});

function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Without useCallback, this function is recreated on every render
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <Child onIncrement={increment} />
    </div>
  );
}

export default UseCallbackExample;
