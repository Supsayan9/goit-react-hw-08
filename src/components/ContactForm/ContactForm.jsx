import {
  useDispatch,
  useSelector,
} from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { nanoid } from "nanoid";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Number too Short!")
    .max(50, "Number too Long!")
    .required("Required!"),
});

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (
    values,
    { resetForm }
  ) => {
    const { name, number } = values;

    const isDuplicate = contacts.some(
      (contact) =>
        contact.name &&
        name &&
        contact.name.toLowerCase() ===
          name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleChange }) => (
        <Form className={s.form}>
          <label className={s.label}>
            Name
            <Field
              type="text"
              name="name"
              placeholder="Please, enter your name..."
              className={s.field}
              value={values.name}
              onChange={handleChange}
              required
            />
            <ErrorMessage
              component="div"
              name="name"
              className={s.error}
            />
          </label>
          <label className={s.label}>
            Number
            <Field
              type="tel"
              name="number"
              placeholder="Please, enter your number..."
              className={s.field}
              value={values.number}
              onChange={handleChange}
              required
            />
            <ErrorMessage
              name="number"
              component="div"
              className={s.error}
            />
          </label>
          <button type="submit" className={s.btn}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
