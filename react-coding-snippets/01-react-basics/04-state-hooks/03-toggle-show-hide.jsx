// Topic: useState - Toggle Visibility
// Description: Toggle content visibility using a boolean state
// Output: Show/hide a paragraph on button click

import React, { useState } from "react";

function ToggleContent() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>

      {isVisible && <p>This text can be toggled.</p>}
    </div>
  );
}

export default ToggleContent;
