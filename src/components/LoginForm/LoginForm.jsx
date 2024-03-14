import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operators';
import * as yup from 'yup';
import css from './loginForm.module.css';

const validationFormSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .matches(/^(?!.*@[^,]*,)/),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();
  return (
    <div className={css.login}>
      <Formik
        validationSchema={validationFormSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values, actions) => {
          dispatch(
            login({
              email: values.email,
              password: values.password,
            })
          );
          actions.resetForm();
        }}
      >
        <Form>
          <h2>Login Form</h2>
          <div className={css.inputBox}>
            <label className={css.text} htmlFor={emailId}>
              email
            </label>
            <Field type="text" id={emailId} name="email" />
            <ErrorMessage name="email" component="span" />
          </div>
          <div className={css.inputBox}>
            <label className={css.text} htmlFor={passwordId}>
              password
            </label>
            <Field type="password" id={passwordId} name="password" />
            <ErrorMessage name="password" component="span" />
          </div>
          <button type="submit">submit</button>
        </Form>
      </Formik>
    </div>
  );
}