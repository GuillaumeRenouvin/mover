import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNavigationHelpers, TabNavigator, StackNavigator } from "react-navigation";
import * as Pages from "mover/src/pages";
import { Header } from "mover/src/components";

export const AppNavigator = StackNavigator({
  tab: {
    screen: TabNavigator({
      home: {
        screen: Pages.Home,
      },
      settings: {
        screen: Pages.Settings,
      },
      movies: {
        screen: Pages.Movies,
      }
    }, {
      initialRouteName: 'home',
      tabBarPosition: 'top',
      //swipeEnabled: true,
    })
  }
}, {
  navigationOptions: {
    header: ({ navigation }) => {
      return <Header navigation={navigation} />;
    },
  },
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
