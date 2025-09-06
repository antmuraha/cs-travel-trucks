import { Button } from '@controls/Button';

import styles from './index.module.css';

interface FormBookProps {
  className?: string;
}

export const FormBook = ({ className }: FormBookProps) => {
  return (
    <form className={`${styles.formBook} ${className}`}>
      <header>
        <h2 className={styles.title}>Book your campervan now</h2>
        <p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>
      </header>
      <div className={styles.inputs}>
        <label>
          <input type="text" name="name" required placeholder="Name*" />
        </label>
        <label>
          <input type="email" name="email" required placeholder="Email*" />
        </label>
        <label>
          <input type="date" name="date" required placeholder="Booking date*" />
        </label>
        <label>
          <textarea name="message" rows={4} placeholder="Comment*" />
        </label>
      </div>
      <Button type="submit">Send</Button>
    </form>
  );
};
