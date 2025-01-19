import { NavLink, useLocation } from 'react-router';

import './nav.css';

export const Nav = () => {
  const location = useLocation().pathname;
  const home = location === '/';
  const favorites = location === '/favorites';

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className={`nav__item ${home ? 'isActive' : ''}`}>
          <NavLink
            to="/"
            end
            aria-label="Home"
            title="Home"
            className="nav__link"
          >
            Все котики
          </NavLink>
        </li>
        <li className={`nav__item ${favorites ? 'isActive' : ''}`}>
          <NavLink
            to="/favorites"
            aria-label="Favorites"
            title="Favorites"
            className="nav__link"
          >
            Любимые котики
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
