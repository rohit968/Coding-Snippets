// Topic: Conditional Rendering - Short Circuit (&&)
// Description: Render content only if condition is true
// Output: Displays a secret message only when visible is true

import React, { useState } from "react";

function ShortCircuitRender() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle Secret</button>

      {visible && <p>🔥 This is a secret message!</p>}
    </div>
  );
}

export default ShortCircuitRender;
