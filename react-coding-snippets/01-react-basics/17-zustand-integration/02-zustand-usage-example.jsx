// 📌 Topic: Using Zustand Store in Component
// 📖 Description: Zustand makes it easy to manage global state without boilerplate.
// Here, we read and update the count from the Zustand store.

import React from "react";
import { useCounterStore } from "./basic-zustand-store";

export default function CounterApp() {
  const { count, increment, reset } = useCounterStore();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={reset}>🔁 Reset</button>
    </div>
  );
}

// 💡 Output:
// Displays current count, buttons to increment or reset.
// Zustand keeps state even if component re-renders.
