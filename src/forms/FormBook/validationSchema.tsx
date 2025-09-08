import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('This field is required')
    .min(3, 'Name must be at least 3 characters long')
    .max(50, 'Name must not exceed 50 characters'),
  email: Yup.string().email('Invalid email format').required('This field is required'),
  date: Yup.date().required('This field is required').min(new Date(), 'Booking date cannot be in the past'),
  message: Yup.string().required('This field is required').max(500, 'Comment must not exceed 500 characters'),
});

export default validationSchema;
