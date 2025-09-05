import { Icon, type icons } from '../Icon';

import styles from './index.module.css';

export interface SquareButtonProps {
  name: string;
  type: 'checkbox' | 'radio';
  label: string;
  value: string;
  icon: keyof typeof icons;
  iconSize?: number;
  active?: boolean;
  checked?: boolean;
  onClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SquareButton = ({
  name,
  type,
  label,
  value,
  onClick,
  icon,
  iconSize = 32,
  active,
  checked,
}: SquareButtonProps) => {
  return (
    <label className={`${styles.squareButton} ${active ? styles.active : ''}`}>
      <Icon name={icon} size={iconSize} />
      <span>{label}</span>
      <input type={type} name={name} value={value} defaultChecked={checked} onChange={onClick} />
    </label>
  );
};
