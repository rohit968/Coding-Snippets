// 07-useImperativeHandle.jsx
// Topic: useImperativeHandle + forwardRef
// Description:
// Allows parent components to call functions on child components using refs.

import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
    clearInput: () => {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} placeholder="Type something..." />;
});

function UseImperativeHandleExample() {
  const inputComponentRef = useRef();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>useImperativeHandle Example</h2>
      <CustomInput ref={inputComponentRef} />
      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => inputComponentRef.current.focusInput()}>
          Focus Input
        </button>
        <button onClick={() => inputComponentRef.current.clearInput()}>
          Clear Input
        </button>
      </div>
    </div>
  );
}

export default UseImperativeHandleExample;

// Tip: This shows how a parent component can use functions exposed from a child component via useImperativeHandle.
