import { useNavigate } from 'react-router';
import { Button } from '@controls/Button';
import { Features } from '@controls/Features';
import { Icon } from '@controls/Icon';
import { Image } from '@controls/Image';

import styles from './index.module.css';
import useViewTransition from '@hooks/useViewTransition';
import routes from '@constants/routes';
import { FavoriteIcon } from '@components/FavoriteIcon';

export interface CardTruckProps {
  id: number | string;
  to: string;
  title: string;
  image: string;
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

export const CardTruck = ({
  id,
  to,
  title,
  image,
  price,
  description,
  features,
  location,
  rating,
  reviews,
}: CardTruckProps) => {
  const navigate = useNavigate();
  const startTransition = useViewTransition(() => {
    navigate(routes.catalogItem(id));
  });

  return (
    <div className={styles.cardTruck}>
      <Image
        className={styles.cardTruckImage}
        // TODO: Not working
        // styles={{ viewTransitionName: `hero-image-${id}` }}
        alt={title}
        title={title}
        src={image}
      />
      <div className={styles.cardTruckInfo}>
        <div className={styles.cardTruckInfoHeader}>
          <h2>{title}</h2>
          <div className="flex" />
          <div className={styles.headerRight}>
            <div className={styles.price}>€{price}</div>
            <FavoriteIcon id={id} className={styles.favoriteIcon} />
          </div>
        </div>
        <div className={styles.cardTruckInfoDetails}>
          <Icon className={styles.iconStar} name="star" size={16} />
          <span>{`${rating} (${reviews} Reviews)`}</span>
          <Icon className={styles.iconMap} name="map" size={16} />
          <span>{location}</span>
        </div>
        <p className={styles.cardTruckInfoDescription}>{description}</p>
        <Features className={styles.cardTruckInfoFeatures} options={features} />
        <Button className={styles.cardTruckInfoButton} asNavLink to={to} onClick={startTransition}>
          Show more
        </Button>
      </div>
    </div>
  );
};
