import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import movieApi from '../services/movieApi';
import Cast from '../pages/Cast';
import Reviews from '../pages/Reviews';
import routes from '../routes';
import Loader from '../components/Loader/Loader';
import MovieCard from '../components/MovieCard/MovieCard';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    movieApi
      .fetchMovieDetails(this.props.match.params.movieId)
      .then(movie => this.setState({ movie }))
      .finally(() => this.setState({ loading: false }));
  }
  handleGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(routes.home);
  };
  render() {
    const { movie } = this.state;
    const { match, location } = this.props;
    return (
      <>
        {this.state.loading && <Loader />}
        {movie && (
          <>
            <MovieCard movie={movie} onClick={this.handleGoBack} />
            <ul>
              <p>Additional information</p>
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/cast`,
                    state: { from: location.state.from },
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: { from: location.state.from },
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Route path={routes.cast} component={Cast} />
            <Route path={routes.rewies} component={Reviews} />
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
