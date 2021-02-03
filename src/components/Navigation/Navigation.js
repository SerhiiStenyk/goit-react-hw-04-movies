import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={s.head}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            exact
            to={routes.home}
            className={s.link}
            activeClassName={s.linkActive}
          >
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to={routes.movies}
            className={s.link}
            activeClassName={s.linkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
