import useIsMobile from '@hooks/useIsMobile';
import { Icon } from '@controls/Icon';
import { Image } from '@controls/Image';
import { FavoriteIcon } from '@components/FavoriteIcon';

import styles from './index.module.css';

export interface CardTruckDetailsProps {
  to: string;
  id: number | string;
  title: string;
  images: string[];
  price: number;
  rating: number;
  reviews: number;
  location: string;
  description: string;
}

export const CardTruckDetails = ({
  id,
  title,
  images,
  price,
  description,
  location,
  rating,
  reviews,
}: CardTruckDetailsProps) => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.cardTruckDetails}>
      <header className={styles.cardTruckInfoHeader}>
        <h1>{title}</h1>
        <FavoriteIcon id={id} />
      </header>
      <div className={styles.cardTruckInfoDetails}>
        <Icon className={styles.iconStar} name="star" size={16} />
        <span className={styles.rating}>{`${rating} (${reviews} Reviews)`}</span>
        <Icon className={styles.iconMap} name="map" size={16} />
        <span>{location}</span>
      </div>
      <div className={styles.price}>€{price}</div>
      <div className={styles.images}>
        {images.map((image, index) => (
          <Image
            key={index}
            // TODO: Not working
            // styles={index === 0 ? { viewTransitionName: `hero-image-${index}` } : {}}
            className={styles.cardTruckImages}
            alt={title}
            title={title}
            src={image}
            lazy={false}
            fetchPriority={isMobile ? (index === 0 ? 'high' : 'low') : 'high'}
          />
        ))}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
