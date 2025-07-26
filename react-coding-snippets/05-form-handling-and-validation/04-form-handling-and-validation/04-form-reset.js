// Topic: Form Reset
// Description: Reset form inputs after submit or manually
// Output: Clears the form on button click

import React, { useState } from "react";

export default function FormReset() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    setForm({ name: "", email: "" }); // reset after submit
  };

  const resetManually = () => setForm({ name: "", email: "" });

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <h2>Form Reset</h2>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <br />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={resetManually} style={{ marginLeft: "8px" }}>
        Reset
      </button>
    </form>
  );
}
