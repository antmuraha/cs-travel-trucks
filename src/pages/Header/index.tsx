import { NavLink, useLocation } from 'react-router';
import routes from '@constants/routes';
import { Logo } from '@controls/Logo';

import styles from './index.module.css';

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className={`${styles.header} ${isHome ? styles.headerHome : ''}`}>
      <div className={styles.headerContent}>
        <NavLink
          className={`${styles.headerLogo} ${isHome ? styles.headerLogoHome : ''}`}
          to={routes.home()}
          aria-label="Logo"
          style={{ viewTransitionName: 'header-logo' }}
        >
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
      </div>
      <div />
    </header>
  );
};
