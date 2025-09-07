import { Icon } from '../Icon';
import styles from './index.module.css';

interface InputLocationProps {
  value: string;
}

export const InputLocation = ({ value }: InputLocationProps) => {
  return (
    <div className={styles.inputLocation}>
      <label htmlFor="location">Location</label>
      <input type="text" id="location" name="location" placeholder="City" defaultValue={value} />
      <Icon name="map" className={styles.icon} size={20} />
    </div>
  );
};
