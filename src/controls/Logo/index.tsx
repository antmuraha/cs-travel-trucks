import { Icon } from '../Icon';
import styles from './index.module.css';

// import IconLogo from '../../assets/icons/logo.svg';

export interface LogoProps {
  className?: string;
  title?: string;
}

export const Logo = ({ className, title }: LogoProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <span className={`${styles.logo} ${className}`} title={title}>
      {/* <IconLogo width={136} height={16} /> */}
      <Icon name="logo" width={136} height={16} />
    </span>
  );
};
