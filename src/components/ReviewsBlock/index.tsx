import { CardReview } from '@components/CardReview';

import styles from './index.module.css';

interface ReviewsBlockProps {
  className?: string;
  reviews: {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }[];
}

export const ReviewsBlock = ({ className, reviews }: ReviewsBlockProps) => {
  return (
    <div className={`${styles.reviewsBlock} ${className}`}>
      {reviews.map((review, index) => (
        <CardReview key={index} name={review.reviewer_name} rating={review.reviewer_rating} comment={review.comment} />
      ))}
    </div>
  );
};
