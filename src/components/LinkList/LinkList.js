import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes';
import PropTypes from 'prop-types';

const LinkList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `${routes.movies}/${id}`,
              state: { from: location },
            }}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
LinkList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
export default withRouter(LinkList);
