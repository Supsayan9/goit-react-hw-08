import { Formik, Form, Field } from "formik";
import s from "./LoginForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Incorrect email")
      .required("Email is required"),
    password: Yup.string().required(
      "Password is required"
    ),
  });

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <label
            htmlFor="email"
            className={s.label}
          >
            Email
            <Field
              type="email"
              name="email"
              className={s.field}
              placeholder="Enter email"
            />
          </label>
          <label
            htmlFor="password"
            className={s.label}
          >
            Password
            <Field
              type="password"
              name="password"
              className={s.field}
              placeholder="Enter password"
            />
          </label>
          <button type="submit" className={s.btn}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
