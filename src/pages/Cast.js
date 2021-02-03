import React, { Component } from 'react';
import movieApi from '../services/movieApi';
import Loader from '../components/Loader/Loader';
import CastCard from '../components/CastCard/CastCard';

class Cast extends Component {
  state = {
    cast: null,
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    movieApi
      .fetchCast(this.props.match.params.movieId)
      .then(({ cast }) => this.setState({ cast }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { cast, loading } = this.state;
    return (
      <>
        {loading && <Loader />}
        {cast && <CastCard cast={cast} />}
      </>
    );
  }
}

export default Cast;
