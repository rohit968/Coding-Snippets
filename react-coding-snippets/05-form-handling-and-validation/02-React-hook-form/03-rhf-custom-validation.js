// Topic: Custom Validation with RHF
// Description: Add custom validation logic using validate
// Output: Disallow specific names (e.g. "admin")

import React from "react";
import { useForm } from "react-hook-form";

export default function RHFCustomValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "1rem" }}>
      <h2>Custom Validation</h2>

      <input
        {...register("username", {
          required: "Username required",
          validate: (val) =>
            val !== "admin" || "You cannot use 'admin' as username"
        })}
        placeholder="Username"
      />
      {errors.username && (
        <p style={{ color: "red" }}>{errors.username.message}</p>
      )}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
