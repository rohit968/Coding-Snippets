// 📌 Topic: useRef to Access DOM Elements
// 📖 Description: useRef can be used to access DOM nodes directly. In this example, clicking the button focuses the input field.
// 💡 Output: When the "Focus Input" button is clicked, the input gets focused.

import React, { useRef } from "react";

function UseRefFocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef DOM Focus Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus me"
      />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default UseRefFocusInput;
