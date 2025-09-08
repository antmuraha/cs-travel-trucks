import { Field, Form, Formik } from 'formik';
import classnames from '@utils/classnames';
import { Button } from '@controls/Button';
import validationSchema from './validationSchema';

import styles from './index.module.css';

interface FormBookProps {
  className?: string;
}

export const FormBook = ({ className }: FormBookProps) => {
  const initialValues = {
    name: '',
    email: '',
    date: '',
    message: '',
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log('Form submitted with values:', values);
  };

  return (
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
              <Field type="date" name="date" placeholder="Booking date*" />
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
          <Button type="submit">Send</Button>
        </Form>
      )}
    </Formik>
  );
};
