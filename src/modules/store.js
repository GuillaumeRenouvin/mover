import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (callback) => {
  const middlewares = [
    sagaMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore(
    reducers,
    undefined,
    composeEnhancers(...enhancers)
  );
  sagaMiddleware.run(rootSaga);

  return persistStore(store, { storage: AsyncStorage }, () => callback(store));
};
