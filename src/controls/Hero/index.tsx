import { Button } from '../Button';

import styles from './index.module.css';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <Button onClick={() => {}}>View Now</Button>
    </div>
  );
};
