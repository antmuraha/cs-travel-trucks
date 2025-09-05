import { Icon, type icons } from '../Icon';
import styles from './index.module.css';

export interface ChipProps {
  label: string;
  icon: keyof typeof icons;
  iconSize?: number;
  onClick?: () => void;
}

export const Chip = ({ label, onClick, icon, iconSize = 20 }: ChipProps) => {
  return (
    <button className={styles.chip} onClick={onClick}>
      <Icon name={icon} size={iconSize} />
      <span>{label}</span>
    </button>
  );
};
