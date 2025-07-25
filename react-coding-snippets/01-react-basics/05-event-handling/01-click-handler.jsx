// Topic: Event Handling - onClick
// Description: Handle a simple button click event
// Output: Alert when user clicks the button

import React from "react";

function ClickHandler() {
  const handleClick = () => {
    alert("You clicked the button!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default ClickHandler;
