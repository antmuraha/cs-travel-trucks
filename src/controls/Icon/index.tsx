import styles from './index.module.css';

import IconLogo from '../../assets/icons/logo.svg';

import IconCupHot from '../../assets/icons/cup-hot.svg?sprite=inline';
import IconDiagram from '../../assets/icons/diagram.svg?sprite=inline';
import IconGrid1x2 from '../../assets/icons/grid-1x2.svg?sprite=inline';
import IconGrid2x2 from '../../assets/icons/grid-2x2.svg?sprite=inline';
import IconGrid3x3 from '../../assets/icons/grid-3x3.svg?sprite=inline';
import IconHeart from '../../assets/icons/heart.svg?sprite=inline';
import IconMap from '../../assets/icons/map.svg?sprite=inline';
import IconShower from '../../assets/icons/shower.svg?sprite=inline';
import IconStar from '../../assets/icons/star.svg?sprite=inline';
import IconTv from '../../assets/icons/tv.svg?sprite=inline';
import IconWind from '../../assets/icons/wind.svg?sprite=inline';

// eslint-disable-next-line react-refresh/only-export-components
export const icons = {
  logo: IconLogo,
  cupHot: IconCupHot,
  diagram: IconDiagram,
  grid1x2: IconGrid1x2,
  grid2x2: IconGrid2x2,
  grid3x3: IconGrid3x3,
  heart: IconHeart,
  map: IconMap,
  shower: IconShower,
  star: IconStar,
  tv: IconTv,
  wind: IconWind,
};

export interface IconProps {
  className?: string;
  name: keyof typeof icons;
  title?: string;
  size?: number; // in px
  width?: number; // in px
  height?: number; // in px
  onClick?: () => void;
}

export const Icon = ({ className, name, title, size = 24, width, height, onClick }: IconProps) => {
  const iconClassName = `${styles.icon} ${className || ''}`;

  const IconComponent = icons[name];

  const iconStyle = { width: width || size, height: height || size };

  return (
    <span className={iconClassName} title={title} style={iconStyle} onClick={onClick}>
      <IconComponent style={iconStyle} />
    </span>
  );
};
