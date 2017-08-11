import { connect } from 'react-redux';
import {
  getMoviesSelector,
  loadMoviesCreator,
  removeMovieCreator
} from 'mover/src/modules/Movie';
import { addUserMovieCreator } from 'mover/src/modules/User';
import Home from './Home.component';

const mapStateToProps = state => ({
  movies: getMoviesSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadMovies: () => dispatch(loadMoviesCreator()),
  addUserMovie: (movie) => {
    dispatch(addUserMovieCreator(movie));
  },
  removeMovie: () => {
    dispatch(removeMovieCreator());
  },
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
