// 05-useRef-dom-access.jsx
// Topic: useRef for accessing DOM elements
// Description:
// Demonstrates how to use `useRef` to directly access and interact with a DOM element (e.g., input focus).

import React, { useRef } from "react";

function UseRefDomAccess() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Direct DOM access to focus the input
    inputRef.current?.focus();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>useRef - Access DOM Element</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
        style={{ padding: "0.5rem", marginRight: "1rem" }}
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default UseRefDomAccess;
