import React from 'react';
import PropTypes from 'prop-types';
import { BiArrowBack } from 'react-icons/bi';
import s from './MovieCard.module.css';

const MovieCard = ({ movie, onClick }) => {
  const {
    poster_path,
    release_date,
    title,
    vote_average,
    overview,
    genres,
  } = movie;
  return (
    <>
      <button className={s.button} type="button" onClick={onClick}>
        {' '}
        {<BiArrowBack />} Go Back
      </button>
      <div className={s.card}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <div className={s.description}>
          <h1>
            {title}({release_date.slice(0, 4)})
          </h1>
          <p>User score: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={s.genresList}>
            {genres.map(({ id, name }) => (
              <li className={s.genresItem} key={id}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieCard;
