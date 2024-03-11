import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as yup from 'yup';
import css from './contactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operators';

const validationFormSchema = yup.object().shape({
  name: yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Requiered'),
  number: yup.string().required('Required'),
});

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        validationSchema={validationFormSchema}
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          const contacts = {
            name: values.name,
            phone: values.number,
          };
          dispatch(addContact(contacts));
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <div className={css.container}>
            <div className={css.labelContainer}>
              <label htmlFor={nameId}>Name</label>
              <Field className={css.input} type="text" id={nameId} name="name" />
              <ErrorMessage name="name" component="span" />
            </div>
            <div className={css.labelContainer}>
              <label htmlFor={numberId}>Number</label>
              <Field className={css.input} type="text" id={numberId} name="number" />
              <ErrorMessage name="number" component="span" />
            </div>
            <button className={css.button} type="submit">
              Add Contact
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}