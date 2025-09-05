import styles from './index.module.css';

interface ReviewsBlockProps {
  className?: string;
}

export const ReviewsBlock = ({ className }: ReviewsBlockProps) => {
  return (
    <div className={`${styles.reviewsBlock} ${className}`}>
      <h2>Reviews</h2>
      <ul>
        <li>Great for families</li>
        <li>Spacious interior</li>
        <li>Well-equipped kitchen</li>
        <li>Comfortable beds</li>
        <li>Easy to drive</li>
        <li>Good fuel efficiency</li>
        <li>Ample storage space</li>
        <li>Modern amenities</li>
        <li>Water</li>
      </ul>
    </div>
  );
};
