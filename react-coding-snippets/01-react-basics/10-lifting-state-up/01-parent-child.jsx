// Topic: Lifting State Up (Parent-Child Communication)
// Description: State should be lifted to the closest common ancestor when multiple components need to share or update it. This shows how a child updates parent state via props.

import React, { useState } from "react";

function Child({ onButtonClick }) {
  return (
    <button onClick={() => onButtonClick("Message from Child")}>
      Click Me
    </button>
  );
}

function Parent() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2>Parent Component</h2>
      <p>{message}</p>
      <Child onButtonClick={setMessage} />
    </div>
  );
}

export default Parent;

// Output: [Click Me] → shows "Message from Child" in parent

// Tip: This is core to data flow in React: parent owns the state, child triggers changes via callback props.
