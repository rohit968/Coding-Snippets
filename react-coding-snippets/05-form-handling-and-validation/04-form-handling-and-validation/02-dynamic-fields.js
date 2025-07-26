// Topic: Dynamic Fields
// Description: Add/remove input fields (e.g. hobbies)
// Output: Renders dynamic list of input fields

import React, { useState } from "react";

export default function DynamicFields() {
  const [hobbies, setHobbies] = useState([""]);

  const handleChange = (i, value) => {
    const updated = [...hobbies];
    updated[i] = value;
    setHobbies(updated);
  };

  const addField = () => setHobbies([...hobbies, ""]);
  const removeField = (i) =>
    setHobbies(hobbies.filter((_, idx) => idx !== i));

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Dynamic Fields</h2>
      {hobbies.map((hobby, i) => (
        <div key={i}>
          <input
            placeholder={`Hobby ${i + 1}`}
            value={hobby}
            onChange={(e) => handleChange(i, e.target.value)}
          />
          <button onClick={() => removeField(i)} disabled={hobbies.length === 1}>
            ❌
          </button>
        </div>
      ))}
      <br />
      <button onClick={addField}>Add Hobby</button>
      <hr />
      <pre>{JSON.stringify(hobbies, null, 2)}</pre>
    </div>
  );
}
