// Topic: Nested Fields in RHF
// Description: Working with nested field names like user.name
// Output: Accesses data as nested object

import React from "react";
import { useForm } from "react-hook-form";

export default function RHFNestedFields() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Nested:", data); // data.user.name
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "1rem" }}>
      <h2>Nested Fields</h2>
      <input {...register("user.name")} placeholder="User Name" />
      <br />
      <input {...register("user.email")} placeholder="User Email" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
