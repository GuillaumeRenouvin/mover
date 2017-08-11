import { combineReducers } from 'redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { movieReducer } from './Movie';
import { userReducer } from './User';
import { AppNavigator } from 'mover/src/AppNavigator';


//Force a Init of the main router
let initialNavState = AppNavigator.router.getStateForAction(
  NavigationActions.init()
);

const firstAction = AppNavigator.router.getActionForPathAndParams("tab");

//Then calculate the state with a navigate action to the first route, sending the previous initialized state as argument
initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
  initialNavState
);

function nav(state = initialNavState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialState = {};

const appReducer = combineReducers({
  movie: movieReducer,
  user: userReducer,
  nav,
});

const rootReducer = (state = initialState, action) => (appReducer(state, action));

export default rootReducer;
