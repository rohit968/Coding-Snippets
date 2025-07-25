// Topic: Controlled Form Input with useState
// Description: Controlled inputs are those whose values are managed by React state. This shows how to sync an input field with a state variable using onChange.

import React, { useState } from "react";

function SingleInputForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || "Stranger"}!</p>
    </div>
  );
}

export default SingleInputForm;

// Output: Input field + greeting message that updates as you type.

// Tip: Always bind value and onChange together to create a controlled input. Don’t let React lose control of the field.
