// Topic: Multi-Step Form
// Description: Form split into steps using state
// Output: Shows form in two steps with navigation

import React, { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log("Submitted:", form);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Multi-Step Form</h2>
      {step === 1 && (
        <>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <br />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <br />
          <button onClick={next}>Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            type="password"
          />
          <br />
          <button onClick={prev}>Back</button>{" "}
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
}
