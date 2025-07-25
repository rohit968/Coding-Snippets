// Topic: Children Prop
// Description: Passing nested elements via the `children` prop
// Output: Displays content wrapped inside a reusable Card

import React from "react";

function Card({ children }) {
  return (
    <div
      style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}
    >
      {children}
    </div>
  );
}

export default Card;

// Usage Example:
<Card>
  <h4>Title</h4>
  <p>This content is passed as children.</p>
</Card>;
