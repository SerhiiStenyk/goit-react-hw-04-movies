import React, { Component } from 'react';
import movieApi from '../services/movieApi';
import Loader from '../components/Loader/Loader';
import LinkList from '../components/LinkList/LinkList';

class HomePage extends Component {
  state = {
    movies: null,
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    movieApi
      .fetchTrendingMovies()
      .then(({ results }) => this.setState({ movies: results }))
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    const { loading, movies } = this.state;
    return (
      <>
        {loading && <Loader />}
        {movies && (
          <div>
            <h2>Trending today</h2>
            <LinkList movies={movies} />
          </div>
        )}
      </>
    );
  }
}

export default HomePage;
