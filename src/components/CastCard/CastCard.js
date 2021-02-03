import React from 'react';
import PropTypes from 'prop-types';

const CastCard = ({ cast }) => {
  return (
    <div>
      <ul>
        {cast.map(({ id, profile_path, original_name, character }) => (
          <li key={id}>
            <img
              width="100px"
              height="150px"
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={original_name}
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

CastCard.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default CastCard;
