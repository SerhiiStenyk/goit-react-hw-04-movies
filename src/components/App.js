import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';
import routes from '../routes';
// import HomePage from '../pages/HomePage';
// import MoviesPage from '../pages/MoviesPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';

const App = () => {
  const HomePage = lazy(() =>
    import('../pages/HomePage' /* webpackChunkName: "home-page"*/),
  );
  const MoviesPage = lazy(() =>
    import('../pages/MoviesPage' /* webpackChunkName: "movies-page"*/),
  );
  const MovieDetailsPage = lazy(() =>
    import(
      '../pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page"*/
    ),
  );
  return (
    <Layout>
      <Navigation />
      <Suspense
        fallback={
          <>
            <h1>Loading...</h1> <Loader />
          </>
        }
      >
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
