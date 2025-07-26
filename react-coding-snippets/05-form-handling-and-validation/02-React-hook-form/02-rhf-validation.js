// Topic: RHF Validation
// Description: Add required field + email pattern validation
// Output: Shows errors on blur/submit

import React from "react";
import { useForm } from "react-hook-form";

export default function RHFValidation() {
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
      <h2>RHF Validation</h2>

      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

      <br />

      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Invalid email format"
          }
        })}
        placeholder="Email"
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
