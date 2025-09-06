import { NavLink } from 'react-router';
import { Logo } from '@controls/Logo';

import styles from './index.module.css';
import routes from '@constants/routes';

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink className={styles.headerLogo} to={routes.home()} aria-label="Logo">
        <Logo />
      </NavLink>
      <nav>
        <ul>
          <li className={styles.headerNavItemHome}>
            <NavLink to={routes.home()} className={({ isActive }) => (isActive ? styles.active : '')}>
              Home
            </NavLink>
          </li>
          <li className={styles.headerNavItemCatalog}>
            <NavLink to={routes.catalog()} end className={({ isActive }) => (isActive ? styles.active : '')}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
      <div />
    </header>
  );
};
