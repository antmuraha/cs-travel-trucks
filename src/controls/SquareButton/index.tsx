import { useRef } from 'react';
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
  const ref = useRef<HTMLInputElement>(null);

  const handleRadioChange = (event: React.MouseEvent<HTMLLabelElement> | React.KeyboardEvent<HTMLLabelElement>) => {
    if (type === 'radio' && ref.current?.checked) {
      // Functionality responsible for deselecting the radio button
      const keyboardEvent = event as React.KeyboardEvent<HTMLLabelElement>;
      console.log('keyboardEvent.key', keyboardEvent.key);
      if (event.type === 'keydown' && keyboardEvent.key !== 'Spacebar') {
        return;
      }

      setTimeout(() => {
        if (ref.current) {
          ref.current.checked = false;
        }
      }, 100);
      return;
    }
  };

  return (
    <label
      className={`${styles.squareButton} ${active ? styles.active : ''}`}
      onMouseDown={handleRadioChange}
      onKeyUp={handleRadioChange}
    >
      <Icon name={icon} size={iconSize} />
      <span>{label}</span>
      <input ref={ref} type={type} name={name} value={value} defaultChecked={checked} onChange={onClick} />
    </label>
  );
};
