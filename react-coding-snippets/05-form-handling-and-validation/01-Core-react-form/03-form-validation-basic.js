// Topic: Manual Form Validation
// Description: Validates required fields and basic email format manually
// Output: Shows error messages if validation fails

import React, { useState } from "react";

export default function ManualValidationForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email format";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form is valid 🎉");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <h2>Manual Validation</h2>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
      <br />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
