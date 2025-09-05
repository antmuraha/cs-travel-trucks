import { NavLink } from 'react-router';
import styles from './index.module.css';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  asNavLink?: boolean;
  to?: string;
}

export const Button = ({ className = '', children, onClick, variant, asNavLink, to }: ButtonProps) => {
  const buttonClassName = `${styles.button} ${variant === 'secondary' ? styles.secondary : styles.primary}`;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>) => {
    if (asNavLink && typeof onClick === 'function') {
      event.preventDefault();
    }

    if (onClick) {
      onClick();
    }
  };

  if (asNavLink) {
    if (!to) {
      throw new Error(`Missing "to" prop for Button with asNavLink=true ${children}`);
    }

    return (
      <NavLink className={`${buttonClassName} ${className}`} to={to} prefetch="intent" onClick={handleClick}>
        {children}
      </NavLink>
    );
  }

  return (
    <button className={`${buttonClassName} ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};
