// Topic: useWatch in RHF
// Description: Watching field value changes in real time
// Output: Displays live input from watched field

import React from "react";
import { useForm } from "react-hook-form";

export default function RHFWatcher() {
  const { register, watch } = useForm();
  const liveName = watch("name");

  return (
    <div style={{ padding: "1rem" }}>
      <h2>useWatch Demo</h2>
      <input {...register("name")} placeholder="Type your name" />
      <br />
      <p>Live Preview: <strong>{liveName}</strong></p>
    </div>
  );
}
