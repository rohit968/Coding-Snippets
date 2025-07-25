// Topic: Handling Multiple Inputs in One State Object
// Description: Instead of separate useState for each field, use a single object to manage multiple inputs. Great for forms with many fields like signup/login.

import React, { useState } from "react";

function MultiInputForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
    </div>
  );
}

export default MultiInputForm;

//Output: ->
// Email: [input value]
// Password: [input value]

// Tip: Use name attributes and [name]: value syntax to dynamically update fields without writing separate handlers.
