// 12-useId-form-label.jsx
// ✅ Demonstrates useId for generating unique IDs — useful for accessible form labels.

import React, { useId } from "react";

// 🔍 Helps associate <label> with <input> using unique ID
export default function UseIdExample() {
  const id = useId(); // auto-generated unique ID

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <form>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor={`${id}-name`}
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Name:
          </label>
          <input
            id={`${id}-name`}
            type="text"
            placeholder="Enter your name"
            style={{ padding: "0.5rem", width: "100%" }}
          />
        </div>

        <div>
          <label
            htmlFor={`${id}-email`}
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Email:
          </label>
          <input
            id={`${id}-email`}
            type="email"
            placeholder="Enter your email"
            style={{ padding: "0.5rem", width: "100%" }}
          />
        </div>
      </form>
    </div>
  );
}
