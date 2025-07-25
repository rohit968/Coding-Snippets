// Topic: Event Handling - Form Submission
// Description: Handle form input and submission
// Output: Shows entered name after submitting the form

import React, { useState } from "react";

function FormHandler() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(name);
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>You submitted: {submitted}</p>}
    </div>
  );
}

export default FormHandler;
