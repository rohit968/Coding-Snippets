// Topic: Basic Controlled Form
// Description: A simple form with two controlled inputs (name and email)
// Output: Displays live form data below inputs

import React, { useState } from "react";

export default function BasicForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Basic Form</h2>
      <label>
        Name: <br />
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email: <br />
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <hr />
      <p>
        Hello <b>{name}</b>, your email is <b>{email}</b>
      </p>
    </div>
  );
}
