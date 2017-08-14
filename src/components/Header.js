import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Dimensions, Animated } from "react-native";
import _ from 'lodash';
import { HeaderIcon } from ".";

const Screen = Dimensions.get('window');

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 28,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginLeft: Screen.width / 2 - 37
  }
});

class Header extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', height: 60}}>
        <Animated.View
          style={[
            styles.headerContainer,
            {transform: [{
              translateX: this.props.position.interpolate({
                inputRange: [0, 2],
                outputRange: [Screen.width / 2 - 25, -Screen.width / 2 + 25]
              })
            }]}
          ]}
        >
          <View>
            <HeaderIcon
              onPress={() => this.props.navigation.navigate("settings")}
              iconName={'cog'}
              inputRange={[0, 1, 2]}
              outputRange={[2, 1, 1]}
              outputRangeColor={['#ff3232', '#aaaaaa', '#aaaaaa']}
              position={this.props.position}
            />
          </View>
          <View style={styles.iconContainer}>
            <HeaderIcon
              onPress={() => this.props.navigation.navigate("home")}
              iconName={'home'}
              inputRange={[0, 1, 2]}
              outputRange={[1, 2, 1]}
              outputRangeColor={['#aaaaaa', '#ff3232', '#aaaaaa']}
              position={this.props.position}
            />
          </View>
          <View style={styles.iconContainer}>
            <HeaderIcon
              onPress={() => this.props.navigation.navigate("movies")}
              iconName={'caret-square-o-right'}
              inputRange={[0, 1, 2]}
              outputRange={[1, 1, 2]}
              outputRangeColor={['#aaaaaa', '#aaaaaa', '#ff3232']}
              position={this.props.position}
            />
          </View>
        </Animated.View>
      </View>
    );
  }
}

Header.propTypes = {
  navigation: PropTypes.object.isRequired,
  position: PropTypes.object.isRequired,
};

export default Header;
