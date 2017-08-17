import { connect } from 'react-redux';
import {
  getMoviesSelector,
  loadMoviesCreator,
  getGenresSelector,
  getArrayIdGenresSelector,
  loadGenresCreator,
  removeMovieCreator
} from 'mover/src/modules/Movie';
import { addUserMovieCreator } from 'mover/src/modules/User';
import Home from './Home.component';

const mapStateToProps = state => ({
  movies: getMoviesSelector(state),
  getArrayIdGenres: genre_ids => getArrayIdGenresSelector(state, genre_ids)
});

const mapDispatchToProps = (dispatch) => ({
  loadMovies: () => dispatch(loadMoviesCreator()),
  loadGenres: () => dispatch(loadGenresCreator()),
  addUserMovie: (movie) => {
    dispatch(addUserMovieCreator(movie));
  },
  removeMovie: () => {
    dispatch(removeMovieCreator());
  },
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
