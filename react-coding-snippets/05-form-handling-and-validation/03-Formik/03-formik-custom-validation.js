// Topic: Custom Validation in Formik
// Description: Using inline custom validation without Yup
// Output: Custom error message when input is empty or forbidden

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validateUsername = (value) => {
  if (!value) return "Username is required";
  if (value.toLowerCase() === "admin") return "'admin' is not allowed";
};

export default function FormikCustomValidation() {
  return (
    <Formik
      initialValues={{ username: "" }}
      onSubmit={(values) => console.log(values)}
    >
      <Form style={{ padding: "1rem" }}>
        <h2>Custom Validation</h2>
        <Field name="username" validate={validateUsername} placeholder="Username" />
        <ErrorMessage name="username" component="div" style={{ color: "red" }} />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
