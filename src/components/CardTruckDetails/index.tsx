import { Features } from '@controls/Features';
import { Icon } from '@controls/Icon';
import { Image } from '@controls/Image';

import styles from './index.module.css';

export interface CardTruckDetailsProps {
  to: string;
  title: string;
  images: string[];
  price: number;
  rating: number;
  reviews: number;
  location: string;
  description: string;
  features: {
    AC: boolean;
    bathroom: boolean;
    kitchen: boolean;
    TV: boolean;
    radio: boolean;
    refrigerator: boolean;
    microwave: boolean;
    gas: boolean;
    water: boolean;
  };
}

export const CardTruckDetails = ({
  title,
  images,
  price,
  description,
  features,
  location,
  rating,
  reviews,
}: CardTruckDetailsProps) => {
  return (
    <div className={styles.cardTruckDetails}>
      <header className={styles.cardTruckInfoHeader}>
        <h1>{title}</h1>
        <Icon name="heart" size={24} />
      </header>
      <div className={styles.cardTruckInfoDetails}>
        <Icon className={styles.iconStar} name="star" size={16} />
        <span>{`${rating} (${reviews} Reviews)`}</span>
        <Icon className={styles.iconMap} name="map" size={16} />
        <span>{location}</span>
      </div>
      <div className="card-truck-price">
        <div>€{price}</div>
      </div>
      <div className="images">
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
          />
        ))}
      </div>
      <div className={styles.cardTruckInfo}>
        <p className={styles.cardTruckInfoDescription}>{description}</p>
        <Features className={styles.cardTruckInfoFeatures} options={features} />
      </div>
    </div>
  );
};
