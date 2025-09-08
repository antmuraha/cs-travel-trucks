import { getIconNameByFeature } from '../../utils/features';
import { Chip } from '../Chip';

import styles from './index.module.css';

const list = [
  'AC',
  'bathroom',
  'kitchen',
  'TV',
  'radio',
  'refrigerator',
  'microwave',
  'gas',
  'water',
  'transmission',
  'engine',
];

interface FeaturesProps {
  className?: string;
  options: {
    transmission: string;
    engine: string;
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

        let label: string = feature;

        if (feature === 'transmission' || feature === 'engine') {
          label = options[feature];
        }

        return (
          <li key={feature}>
            <Chip icon={iconName} label={label} />
          </li>
        );
      })}
    </ol>
  );
};
