import { getFirstLetter } from '@utils/text';
import { Icon } from '@controls/Icon';

import styles from './index.module.css';

interface CardReviewProps {
  name: string;
  rating: number;
  comment: string;
}

export const CardReview = ({ name, rating, comment }: CardReviewProps) => {
  return (
    <section className={styles.cardReview} aria-label={`Review by ${name}`}>
      <header className={styles.header}>
        <div className={styles.avatar}>{getFirstLetter(name)}</div>
        <div className={styles.info}>
          <h3>{name}</h3>
          <div className={styles.rating} aria-label={`Rating: ${rating}`}>
            {Array.from({ length: 5 }, (_, index) => (
              <Icon
                key={index}
                name="star"
                className={`${styles.star} ${index < rating ? styles.active : ''}`}
                aria-hidden="true"
                size={16}
              />
            ))}
          </div>
        </div>
      </header>
      <p className={styles.comment}>{comment}</p>
    </section>
  );
};
