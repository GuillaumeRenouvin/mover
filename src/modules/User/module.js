import { REHYDRATE } from 'redux-persist/constants';
import _ from 'lodash';

const initialState = {
  movies: [],
  seenMovies: [],
  pageIndex: 0,
};

// ACTION TYPES
export const actionTypes = {
  addUserMovieSuccessAction: 'ADD_USER_MOVIE_SUCCESS_ACTION',
  removeUserMovieSuccessAction: 'REMOVE_USER_MOVIE_SUCCESS_ACTION',
  addUserSeenMovieSuccessAction: 'ADD_USER_SEEN_MOVIE_SUCCESS_ACTION',
  removeUserSeenMovieSuccessAction: 'REMOVE_USER_SEEN_MOVIE_SUCCESS_ACTION',
  incrementPageIndexAction: 'INCREMENT_PAGE_INDEX_ACTION',
  resetPageIndexAction: 'RESET_PAGE_INDEX_ACTION',
};

// REDUCER
export function userReducer(state = initialState, action: Object) {
  switch (action.type) {
    case actionTypes.addUserMovieSuccessAction:
      return {
        ...state,
        movies: _(_.cloneDeep(state.movies)).concat(action.movie).uniqBy('id').value(),
      };
    case actionTypes.removeUserMovieSuccessAction:
      return {
        ...state,
        movies: _.filter(state.movies, (movie) => {return movie.id != action.movie.id}),
      };
    case actionTypes.addUserSeenMovieSuccessAction:
      return {
        ...state,
        movies: _.filter(state.movies, (movie) => {return movie.id != action.movie.id}),
        seenMovies: _(_.cloneDeep(state.seenMovies)).concat(action.movie).uniqBy('id').value(),
      };
    case actionTypes.removeUserSeenMovieSuccessAction:
      return {
        ...state,
        seenMovies: _.filter(state.seenMovies, (movie) => {return movie.id != action.movie.id}),
      };
    case actionTypes.incrementPageIndexAction:
      return {
        ...state,
        pageIndex: state.pageIndex + 1,
      };
    case actionTypes.resetPageIndexAction:
      return {
        ...state,
        pageIndex: 0,
      };
    case REHYDRATE: return action.payload.authenticate || state;
    default:
      return state;
  }
}

// ACTION CREATORS
export const addUserMovieCreator = (movie) => ({
  type: actionTypes.addUserMovieSuccessAction,
  movie
});

export const removeUserMovieCreator = (movie) => ({
  type: actionTypes.removeUserMovieSuccessAction,
  movie
});

export const addUserSeenMovieCreator = (movie) => ({
  type: actionTypes.addUserSeenMovieSuccessAction,
  movie
});

export const removeUserSeenMovieCreator = (movie) => ({
  type: actionTypes.removeUserSeenMovieSuccessAction,
  movie
});
