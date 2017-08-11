import { connect } from 'react-redux';
import {
  getUserMoviesSelector,
  getUserSeenMoviesSelector,
  removeUserMovieCreator,
  removeUserSeenMovieCreator,
  addUserSeenMovieCreator
} from 'mover/src/modules/User';
import Movies from './Movies.component';

const mapStateToProps = state => ({
  movies: getUserMoviesSelector(state),
  seenMovies: getUserSeenMoviesSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  removeUserMovie: (movie) => {
    dispatch(removeUserMovieCreator(movie));
  },
  removeUserSeenMovie: (movie) => {
    dispatch(removeUserSeenMovieCreator(movie));
  },
  addUserSeenMovie: (movie) => {
    dispatch(addUserSeenMovieCreator(movie));
  },
});

const MoviesContainer = connect(mapStateToProps, mapDispatchToProps)(Movies);

export default MoviesContainer;
