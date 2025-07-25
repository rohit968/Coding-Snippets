// Topic: useState - Controlled Input
// Description: Binds input value to component state
// Output: Controlled form field showing live value

import React, { useState } from "react";

function InputControl() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || "Stranger"}!</p>
    </div>
  );
}

export default InputControl;
