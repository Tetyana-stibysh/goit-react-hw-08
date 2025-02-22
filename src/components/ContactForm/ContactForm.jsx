import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};
const ContactForm = () => {
  const dispatch = useDispatch();

  const contactId = useId();
  const phonId = useId();
  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        ...values,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div className={s.div}>
          <label htmlFor={contactId} className={s.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            className={s.input}
            id={contactId}
          ></Field>
          <ErrorMessage className={s.error} name="name" component="span" />
        </div>
        <div className={s.div}>
          <label htmlFor={phonId} className={s.label}>
            Number
          </label>
          <Field
            type="tel"
            name="number"
            className={s.input}
            id={phonId}
          ></Field>
          <ErrorMessage className={s.error} name="name" component="span" />
        </div>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
