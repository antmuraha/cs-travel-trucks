import { getIconNameByFeature } from '../../utils/features';
import { Chip } from '../Chip';

import styles from './index.module.css';

const list = ['AC', 'bathroom', 'kitchen', 'TV', 'radio', 'refrigerator', 'microwave', 'gas', 'water'];

interface FeaturesProps {
  className?: string;
  options: {
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

export const Features = ({ className, options }: FeaturesProps) => {
  return (
    <ol className={`${styles.features} ${className}`}>
      {list.map(feature => {
        if (!options[feature as keyof FeaturesProps['options']]) return null;
        const iconName = getIconNameByFeature(feature);

        if (!iconName) return null;

        return (
          <li key={feature}>
            <Chip icon={iconName} label={feature} />
          </li>
        );
      })}
    </ol>
  );
};
