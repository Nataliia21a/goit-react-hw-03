import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum 3 letters")
    .max(50, "Maximum 50 letters")
    .required("Required"),
  number: Yup.string()
    .min(3, "Minimum 3 numbers")
    .max(50, "Maximum 50 numbers")
    .matches(/^\d+$/, "Must be only digits")
    .required("Required"),
  id: Yup.string(),
});

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "", id: nanoid() }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId}></Field>
        <ErrorMessage name="name" />
        <label htmlFor={numberFieldId}>Number</label>
        <Field type="tel" name="number" id={numberFieldId}></Field>
        <ErrorMessage name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
