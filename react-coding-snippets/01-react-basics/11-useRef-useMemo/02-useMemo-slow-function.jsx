// 📌 Topic: useMemo for Expensive Calculation
// 📖 Description: useMemo memoizes the result of a slow function unless the dependency changes. This prevents unnecessary recalculations.
// 💡 Output: Typing in the input doesn't trigger slow calculations unless the number changes.

import React, { useMemo, useState } from "react";

function SlowFunction(num) {
  console.log("Running slow function...");
  for (let i = 0; i < 1e9; i++) {} // simulate heavy work
  return num * 2;
}

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  const doubled = useMemo(() => SlowFunction(number), [number]);

  return (
    <div>
      <h2>useMemo Optimization</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type freely"
      />
      <p>Slow doubled number: {doubled}</p>
    </div>
  );
}

export default UseMemoExample;
