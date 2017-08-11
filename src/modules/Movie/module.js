import { REHYDRATE } from 'redux-persist/constants';
import _ from 'lodash';

const initialState = {
  movies: [],
};

// ACTION TYPES
export const actionTypes = {
  loadMoviesAction: 'LOAD_MOVIES_ACTION',
  loadMoviesSuccessAction: 'LOAD_MOVIES_SUCCESS_ACTION',
  removeMovieAction: 'REMOVE_MOVIE_ACTION',
  removeMovieSuccessAction: 'REMOVE_MOVIE_SUCCESS_ACTION',
};

// REDUCER
export function movieReducer(state = initialState, action: Object) {
  switch (action.type) {
    case actionTypes.loadMoviesSuccessAction:
      return {
        ...state,
        movies: action.movies,
      };
    case actionTypes.removeMovieSuccessAction:
      const movies = _.cloneDeep(state.movies);
      movies.shift();
      return {
        ...state,
        movies,
      };
    case REHYDRATE: return action.payload.authenticate || state;
    default:
      return state;
  }
}

// ACTION CREATORS
export const loadMoviesCreator = () => ({
  type: actionTypes.loadMoviesAction,
});

export const removeMovieCreator = (movie) => ({
  type: actionTypes.removeMovieAction,
  movie
});
