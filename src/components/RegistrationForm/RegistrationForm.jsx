import { Formik, Form, Field } from "formik";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    // console.log(values);
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            Username
            <Field
              type="text"
              name="name"
              className={s.field}
              placeholder="Enter username"
            />
          </label>

          <label className={s.label}>
            Email
            <Field
              type="email"
              name="email"
              className={s.field}
              placeholder="Enter email"
            />{" "}
          </label>
          <label className={s.label}>
            Password
            <Field
              type="password"
              name="password"
              className={s.field}
              placeholder="Enter password"
            />{" "}
          </label>
          <button type="submit" className={s.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
