// Topic: useEffect - Cleanup
// Description: Cleanup interval when component unmounts
// Output: Increments count every second, clears interval on unmount

import React, { useEffect, useState } from "react";

function CleanupExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer);
      console.log("Timer cleaned up");
    };
  }, []);

  return <h2>Timer Count: {count}</h2>;
}

export default CleanupExample;
