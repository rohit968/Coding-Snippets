// Title: usePrevious
// 📝 Description: The usePrevious custom hook allows you to track the previous value of a prop or state between renders — something React doesn’t provide by default. It’s often useful for comparison logic in useEffect, animations, or triggering conditional updates.

import React, { useState, useEffect, useRef } from "react";

// ✅ Custom Hook
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

// ✅ Demo Component
export default function PreviousValueExample() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {prevCount}</h3>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
    </div>
  );
}
