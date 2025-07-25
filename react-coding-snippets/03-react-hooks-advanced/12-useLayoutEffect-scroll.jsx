// 11-useLayoutEffect-scroll.jsx
// ✅ Demonstrates how `useLayoutEffect` works differently from `useEffect` in DOM measurement/manipulation.

import React, { useState, useLayoutEffect, useRef } from "react";

// ✅ Component to compare useLayoutEffect vs useEffect
export default function UseLayoutEffectExample() {
  const [show, setShow] = useState(false);
  const boxRef = useRef();

  useLayoutEffect(() => {
    if (boxRef.current) {
      const { height } = boxRef.current.getBoundingClientRect();
      console.log("📏 useLayoutEffect → Box height before paint:", height);
    }
  }, [show]);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Show"} Box
      </button>

      {show && (
        <div
          ref={boxRef}
          style={{
            marginTop: "1rem",
            padding: "1rem",
            background: "#f0f0f0",
            borderRadius: "8px",
            fontSize: "1.2rem",
          }}
        >
          👋 I'm a box rendered conditionally!
        </div>
      )}
    </div>
  );
}
