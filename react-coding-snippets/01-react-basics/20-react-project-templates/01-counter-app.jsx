// Topic: Counter App – Basic State Usage
// Description: A simple counter using useState for increment/decrement.
// Output: Buttons increase and decrease the count.

import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>🧮 Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕</button>
      <button onClick={() => setCount(count - 1)}>➖</button>
    </div>
  );
};

export default CounterApp;
