import React, { Component } from 'react';
import movieApi from '../services/movieApi';
import Loader from '../components/Loader/Loader';

class Reviews extends Component {
  state = {
    reviews: null,
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    movieApi
      .fetchReviews(this.props.match.params.movieId)
      .then(({ results }) => this.setState({ reviews: results }))
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    const { reviews, loading } = this.state;
    return (
      <div>
        {loading && <Loader />}
        {reviews && reviews.length > 0 ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p> We don't have any reviews for this movie. </p>
        )}
      </div>
    );
  }
}

export default Reviews;
