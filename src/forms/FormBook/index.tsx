import { useState } from 'react';
import { Field, Form, Formik, type FormikHelpers } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import classnames from '@libs/classnames';
import client from '@libs/client';
import { Button } from '@controls/Button';
import { FieldDatePicker } from '@controls/FieldDatePicker';
import validationSchema from './validationSchema';

import styles from './index.module.css';

interface FormBookProps {
  className?: string;
}

export const FormBook = ({ className }: FormBookProps) => {
  const [processing, setProcessing] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    date: '',
    message: '',
  };

  const handleSubmit = (values: typeof initialValues, helpers: FormikHelpers<typeof initialValues>) => {
    const date = values.date as unknown as Date;
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('date', date.toISOString());
    formData.append('message', values.message);

    setProcessing(true);

    client
      .post('/bookings', formData)
      .then((data: { message: string }) => {
        helpers.resetForm();
        toast.success(data.message || 'Booking request sent successfully!');
      })
      .catch(err => {
        toast.error(`Error: ${err.message}`);
      })
      .finally(() => {
        setProcessing(false);
      });
  };

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form className={`${styles.formBook} ${className}`}>
            <header>
              <h2 className={styles.title}>Book your campervan now</h2>
              <p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>
            </header>
            <div className={styles.inputs}>
              <label>
                <Field type="text" name="name" placeholder="Name*" />
                <div className={classnames(styles.error, errors.name && touched.name && styles.errorVisible)}>
                  {errors.name}
                </div>
              </label>
              <label>
                <Field type="email" name="email" placeholder="Email*" />
                <div className={classnames(styles.error, errors.email && touched.email && styles.errorVisible)}>
                  {errors.email}
                </div>
              </label>
              <label>
                <Field type="date" name="date">
                  {({ field }: import('formik').FieldProps) => (
                    <FieldDatePicker placeholder="Booking date*" {...field} />
                  )}
                </Field>
                <div className={classnames(styles.error, errors.date && touched.date && styles.errorVisible)}>
                  {errors.date}
                </div>
              </label>
              <label>
                <Field as="textarea" name="message" rows={4} placeholder="Comment*" />
                <div className={classnames(styles.error, errors.message && touched.message && styles.errorVisible)}>
                  {errors.message}
                </div>
              </label>
            </div>
            <Button type="submit" disabled={processing}>
              {processing ? 'Sending...' : 'Send'}
            </Button>
          </Form>
        )}
      </Formik>
      <Toaster />
    </>
  );
};
