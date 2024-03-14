import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operators';
import * as yup from 'yup';
import css from './registerForm.module.css';

const validationFormSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-/.]+$/, 'Please enter valid name')
    .max(40)
    .required(),
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

export default function RegisterForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  return (
    <div className={css.register}>
      <Formik
        validationSchema={validationFormSchema}
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(values, actions) => {
          dispatch(
            register({
              name: values.name,
              email: values.email,
              password: values.password,
            })
          );
          //   console.log({
          //     name: values.name,
          //     email: values.email,
          //     password: values.password,
          //   });
          actions.resetForm();
        }}
      >
        <Form>
          <h1>Register Form</h1>
          <div className={css.inputBox}>
            <label className={css.text} htmlFor={nameId}>
              Name
            </label>
            <Field type="text" id={nameId} name="name" />
            <ErrorMessage name="name" component="span" />
          </div>
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