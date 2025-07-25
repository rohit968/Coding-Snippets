// 01-useReducer-counter.jsx
// Topic: useReducer for state management
// Description:
// Demonstrates how to use the `useReducer` hook to manage simple counter state.
// This is useful for situations where state logic involves multiple sub-values or actions.

import React, { useReducer } from "react";

// Define the reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action type");
  }
}

function CounterApp() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterApp;
