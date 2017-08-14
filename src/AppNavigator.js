import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNavigationHelpers, TabNavigator, StackNavigator } from "react-navigation";
import * as Pages from "mover/src/pages";
import { Header } from "mover/src/components";

export const AppNavigator = StackNavigator({
  tab: {
    screen: TabNavigator({
      settings: {
        screen: Pages.Settings,
      },
      home: {
        screen: Pages.Home,
      },
      movies: {
        screen: Pages.Movies,
      },
    }, {
      initialRouteName: 'home',
      tabBarPosition: 'top',
      swipeEnabled: true,
      animationEnabled: true,
      tabBarComponent: ({navigation, position}) => <Header navigation={navigation} position={position} />
    })
  },
  movieDetail: {
    screen: Pages.MovieDetail,
  },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'white',
      shadowRadius: 0,
      shadowOffset: {
          height: 0,
      },
    },
    headerTintColor: 'black'
  }
});

const AppWithNavigationState = ({ dispatch, nav }) =>
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />;

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppNavigator);
