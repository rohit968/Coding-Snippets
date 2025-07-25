// 04-useMemo-expensive-calc.jsx
// Topic: useMemo to optimize expensive calculations
// Description:
// Demonstrates how to use `useMemo` to memoize a CPU-intensive function,
// so it only recalculates when the input changes instead of on every render.

import React, { useState, useMemo } from "react";

function slowFunction(num) {
  console.log("⏳ Running slow function...");
  for (let i = 0; i <= 1e9; i++) {} // Simulating a heavy task
  return num * 2;
}

function UseMemoExpensiveCalc() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  // Memoized result: runs slowFunction only when `input` changes
  const computedValue = useMemo(() => slowFunction(input), [input]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>useMemo - Expensive Calculation</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <div style={{ marginTop: "1rem" }}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <p>Computed Value (input * 2): {computedValue}</p>
      </div>
    </div>
  );
}

export default UseMemoExpensiveCalc;
