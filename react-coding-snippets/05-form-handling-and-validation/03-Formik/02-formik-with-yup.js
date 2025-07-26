// Topic: Formik with Yup
// Description: Using Yup for schema-based validation in Formik
// Output: Shows required and email format validation messages

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required")
});

export default function FormikWithYup() {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
    >
      <Form style={{ padding: "1rem" }}>
        <h2>Formik + Yup</h2>
        <Field name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" style={{ color: "red" }} />
        <br />
        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" style={{ color: "red" }} />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
