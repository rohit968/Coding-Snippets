// Topic: Props
// Description: Passing and using props inside a component
// Output: Displays a custom greeting with a name passed as prop

import React from "react";

function Greeting(props) {
  return <h3>Hello, {props.name}!</h3>;
}

// OR using destructuring
// function Greeting({ name }) {
//   return <h3>Hello, {name}!</h3>;
// }

export default Greeting;

// Usage Example:
// <Greeting name="Rohit" />
