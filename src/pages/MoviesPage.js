import React, { Component } from 'react';
import queryParams from '../utils/queryParams';
import Searchbox from '../components/Searchbox/Searchbox';
import Loader from '../components/Loader/Loader';
import movieApi from '../services/movieApi';
import LinkList from '../components/LinkList/LinkList';

class MoviesPage extends Component {
  state = {
    movies: null,
    loading: false,
  };
  componentDidMount() {
    const { query } = queryParams(this.props.location.search);
    if (query) {
      this.fetchMovies(query);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = queryParams(prevProps.location.search);
    const { query: nextQuery } = queryParams(this.props.location.search);
    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }
  fetchMovies = query => {
    this.setState({ loading: true });
    movieApi
      .fetchMovie(query)
      .then(({ results }) => this.setState({ movies: results }))
      .finally(() => this.setState({ loading: false }));
  };

  handleChangeSearch = query => {
    const { history, location } = this.props;
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };
  render() {
    const { movies, loading } = this.state;
    return (
      <div>
        <Searchbox onSubmit={this.handleChangeSearch}></Searchbox>
        {movies && <LinkList movies={movies} />}
        {movies && movies.length === 0 && <p> Nothing found.</p>}
        {loading && <Loader />}
      </div>
    );
  }
}

export default MoviesPage;
