import { fork } from 'redux-saga/effects';
import { movieSaga } from './Movie';

export default function* rootSaga() {
  yield fork(movieSaga);
}
