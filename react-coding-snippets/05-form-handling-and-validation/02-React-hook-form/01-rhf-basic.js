// First run -> npm install react-hook-form

// Topic: React Hook Form
// Description: Minimal form using useForm hook
// Output: Logs submitted data to console

import React from "react";
import { useForm } from "react-hook-form";

export default function RHFBasic() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "1rem" }}>
      <h2>RHF Basic</h2>
      <input {...register("name")} placeholder="Name" />
      <br />
      <input {...register("email")} placeholder="Email" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
