// Topic: useCallback Hook
// Description: Prevents unnecessary function recreation on every render.
// Useful when passing callbacks to child components or optimizing performance.
// Output: Button click increments counter without triggering re-creation of increment function.

import React, { useState, useCallback } from "react";

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setOther(!other)}>Toggle Other State</button>
    </div>
  );
};

export default UseCallbackExample;
