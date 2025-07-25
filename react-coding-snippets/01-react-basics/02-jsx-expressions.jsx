// Topic: JSX Expressions
// Description: Embeds JavaScript values and expressions inside JSX
// Output: Displays a welcome message with name and math expression

import React from "react";

const name = "Rohit";
const age = 24;
const product = 3 * 7;

function JSXExpressions() {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You are {age} years old.</p>
      <p>3 × 7 = {product}</p>
      <p>{age > 18 ? "You're an adult." : "You're a minor."}</p>
    </div>
  );
}

export default JSXExpressions;
