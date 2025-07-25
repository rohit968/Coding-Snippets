// Topic: useEffect - Run Once on Mount
// Description: Runs a side effect when the component mounts
// Output: Logs a message in the console when component loads

import React, { useEffect } from "react";

function UseEffectRunOnce() {
  useEffect(() => {
    console.log("Component mounted (runs once)");
  }, []);

  return <p>Check the console for mount message.</p>;
}

export default UseEffectRunOnce;
