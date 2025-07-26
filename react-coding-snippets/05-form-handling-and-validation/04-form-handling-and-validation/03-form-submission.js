// Topic: Form Submission Feedback
// Description: Loading, success, and error state on submit
// Output: Shows feedback based on simulated async request

import React, { useState } from "react";

export default function FormSubmission() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      if (email.includes("@")) setStatus("success");
      else setStatus("error");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <h2>Submit With Feedback</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br />
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit"}
      </button>
      {status === "success" && <p style={{ color: "green" }}>Success ✅</p>}
      {status === "error" && <p style={{ color: "red" }}>Invalid email ❌</p>}
    </form>
  );
}
