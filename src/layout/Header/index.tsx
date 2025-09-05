import { NavLink } from 'react-router';
import { Logo } from '@controls/Logo';

import './index.css';
import routes from '@constants/routes';

export const Header = () => {
  return (
    <header className="header">
      <NavLink className="header-logo" to={routes.home()} aria-label="Logo">
        <Logo />
      </NavLink>
      <nav>
        <ul>
          <li className="header-nav-item-home">
            <NavLink to={routes.home()} className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li className="header-nav-item-catalog">
            <NavLink to={routes.catalog()} end className={({ isActive }) => (isActive ? 'active' : '')}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
      <div />
    </header>
  );
};
