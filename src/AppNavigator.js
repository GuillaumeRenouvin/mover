import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNavigationHelpers, TabNavigator, StackNavigator } from "react-navigation";
import * as Pages from "mover/src/pages";
import { Header } from "mover/src/components";
import { getCurrentRoute } from "mover/src/services/navigation";

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
        screen: StackNavigator({
          movies: {
            screen: Pages.Movies,
          },
          movieDetail: {
            screen: Pages.MovieDetail,
          },
        }, {
          headerMode: 'screen',
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
        })
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
      // DEPRECATED
      return getCurrentRoute(navigation.state) != 'movieDetail' ?
        <Header navigation={navigation} /> :
        null;
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
