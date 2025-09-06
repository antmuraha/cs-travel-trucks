import useLocalFavorite from '@hooks/useLocalFavorite';
import { Icon } from '@controls/Icon';

import styles from './index.module.css';

interface FavoriteIconProps {
  id: number | string;
  size?: number;
  className?: string;
}

export const FavoriteIcon = ({ id, size = 24, className }: FavoriteIconProps) => {
  const { isFavorite, toggleFavorite } = useLocalFavorite(id);

  return (
    <div>
      {/* @ts-expect-error Custom Web Component */}
      {<click-spark style={{ '--click-spark-color': isFavorite ? '#E44848' : 'transparent' }}></click-spark>}
      <Icon
        name="heart"
        size={size}
        className={`${styles.favoritesIcon} ${className} ${isFavorite ? styles.favorited : ''}`}
        onClick={toggleFavorite}
      />
    </div>
  );
};
