// 02-useReducer-form.jsx
// Topic: useReducer for managing form state
// Description:
// Demonstrates how to use the `useReducer` hook to manage form inputs instead of multiple useState calls.
// This approach is scalable and clean, especially for large or dynamic forms.

import React, { useReducer } from "react";

// Reducer function to handle input changes and reset
function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "RESET":
      return initialFormState;
    default:
      return state;
  }
}

// Initial form state
const initialFormState = {
  username: "",
  email: "",
  password: "",
};

function FormWithReducer() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    dispatch({ type: "RESET" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "2rem auto" }}
    >
      <h2>Signup Form</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formState.username}
        onChange={handleChange}
        style={{ display: "block", margin: "8px 0" }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formState.email}
        onChange={handleChange}
        style={{ display: "block", margin: "8px 0" }}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formState.password}
        onChange={handleChange}
        style={{ display: "block", margin: "8px 0" }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormWithReducer;
