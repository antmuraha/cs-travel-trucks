import DatePicker from 'react-datepicker';
import { useField, useFormikContext } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './index.module.css';

interface FieldDatePickerProps {
  name: string;
  placeholder: string;
  value: Date | null;
}

export const FieldDatePicker = ({ name, placeholder, ...props }: FieldDatePickerProps) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    // @ts-expect-error TODO: fix this types error
    <DatePicker
      wrapperClassName={styles.fieldDatePicker}
      {...props}
      selected={field.value || null}
      placeholderText={placeholder}
      onChange={val => {
        setFieldValue(name, val);
      }}
    />
  );
};
