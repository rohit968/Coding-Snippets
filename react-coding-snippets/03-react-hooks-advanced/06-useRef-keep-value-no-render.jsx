// 06-useRef-keep-value-no-render.jsx
// Topic: useRef to persist values without causing re-render
// Description:
// Demonstrates how `useRef` can hold mutable values across renders without triggering a component re-render.

import React, { useState, useRef } from "react";

function UseRefKeepValueNoRender() {
  const [renderCount, setRenderCount] = useState(0);
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log("Ref Count:", countRef.current);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>useRef - Keep Value Without Re-render</h2>
      <p>Render Count: {renderCount}</p>
      <button onClick={() => setRenderCount((prev) => prev + 1)}>
        Re-render
      </button>
      <button onClick={handleClick}>Update Ref Value</button>
      <p>Check the console to see how ref updates don't trigger re-renders.</p>
    </div>
  );
}

export default UseRefKeepValueNoRender;

// Tip: This shows that updates to useRef().current don’t cause re-renders like state updates do.
