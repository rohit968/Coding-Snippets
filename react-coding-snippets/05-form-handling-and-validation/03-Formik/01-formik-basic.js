// First Run -> npm install formik yup


// Topic: Formik Basic
// Description: Simple Formik form with initial values and onSubmit
// Output: Logs form values on submit

import React from "react";
import { Formik, Form, Field } from "formik";

export default function FormikBasic() {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      onSubmit={(values) => {
        console.log("Submitted:", values);
      }}
    >
      <Form style={{ padding: "1rem" }}>
        <h2>Formik Basic</h2>
        <Field name="name" placeholder="Name" />
        <br />
        <Field name="email" placeholder="Email" />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
