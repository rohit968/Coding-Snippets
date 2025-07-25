// Topic: Conditional Rendering - Ternary Operator
// Description: Shows different UI based on `isLoggedIn` state
// Output: Welcome message or login prompt

import React, { useState } from "react";

function TernaryRender() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <p>Welcome back, Rohit!</p> : <p>Please log in.</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default TernaryRender;
