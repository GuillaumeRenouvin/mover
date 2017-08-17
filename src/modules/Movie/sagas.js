import { takeEvery } from "redux-saga";
import { call, fork, put, select } from "redux-saga/effects";
import themoviedb from "mover/src/services/themoviedb";
import { actionTypes, getMoviesSelector } from ".";
import { actionTypes as userActionTypes, getPageIndexSelector } from "../User";

export function* loadMovies(action) {
  try {
    yield put({type: userActionTypes.incrementPageIndexAction});

    const pageIndex = yield select(getPageIndexSelector);

    const movies = yield call(themoviedb.discover, {
      pageIndex
    });

    yield put({
      type: actionTypes.loadMoviesSuccessAction,
      movies: movies.results
    });
  } catch (err) {
    console.log(err);
  }
}

export function* loadGenres(action) {
  try {
    const genres = yield call(themoviedb.loadGenres);
    
    yield put({
      type: actionTypes.loadGenresSuccessAction,
      genres: genres.genres
    });
  } catch (err) {
    console.log(err);
  }
}

export function* removeMovie(action) {
  const CARD_REFRESH_LIMIT = 10;
  try {
    yield put({type: actionTypes.removeMovieSuccessAction});

    const movies = yield select(getMoviesSelector);

    if(movies.length < CARD_REFRESH_LIMIT) {
      yield call(loadMovies);
    }
  } catch (err) {
    console.log(err);
  }
}

function* loadMoviesSaga() {
  yield* takeEvery(actionTypes.loadMoviesAction, loadMovies);
}

function* loadGenresSaga() {
  yield* takeEvery(actionTypes.loadGenresAction, loadGenres);
}

function* removeMovieSaga() {
  yield* takeEvery(actionTypes.removeMovieAction, removeMovie);
}

export function* movieSaga(): * {
  yield fork(loadMoviesSaga);
  yield fork(loadGenresSaga);
  yield fork(removeMovieSaga);
}
