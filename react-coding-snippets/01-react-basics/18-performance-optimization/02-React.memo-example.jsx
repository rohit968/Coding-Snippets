// Topic: React.memo()
// Description: Optimizes functional components by memoizing the result.
// Avoids unnecessary re-renders if props haven’t changed.
// Output: Child component renders only when its specific prop changes.

import React, { useState } from "react";

const Child = React.memo(({ count }) => {
  console.log("Child rendered");
  return <p>Child Count: {count}</p>;
});

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <h2>React.memo Example</h2>
      <Child count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default MemoExample;
