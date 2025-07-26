// Topic: Form With Unified State
// Description: Managing multiple form inputs using a single state object
// Output: Displays updated values from one state object

import React, { useState } from "react";

export default function UnifiedForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Unified Form State</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <br />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <hr />
      <p>
        {formData.name} - {formData.email}
      </p>
    </div>
  );
}
