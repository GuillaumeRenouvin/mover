import React, { Component, propTypes } from "react";
import PropTypes from "prop-types";
import { NativeModules, StyleSheet, View, LayoutAnimation, Dimensions } from "react-native";
import { HeaderIcon } from ".";

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
const iconHome = require('mover/src/assets/icon-home.jpg');
const iconMovies = require('mover/src/assets/icon-movies.png');
const iconSettings = require('mover/src/assets/icon-settings.png');

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
    marginLeft: Screen.width / 2 - 45
  }
});

class Header extends Component {
  state = {
    selectedPage: 'home',
    marginLeftContainer: 0
  }

  selectPage(page) {
    if(page != this.state.selectedPage) {
      this.setState({
        selectedPage: page
      });
      this.props.navigation.navigate(page);
      LayoutAnimation.easeInEaseOut();

      const marginLeftContainer = 0
      switch(page) {
        case "settings" :
          marginLeftContainer = Screen.width / 2 - 25;
          break;
        case "movies" :
          marginLeftContainer = -Screen.width / 2 + 25;
          break;
      }
      this.setState({marginLeftContainer})
    }
  }

  isSelectedPage(page) {
    return this.state.selectedPage == page;
  }

  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <View style={[styles.headerContainer, {marginLeft: this.state.marginLeftContainer}]}>
          <View>
            <HeaderIcon onPress={() => this.selectPage("settings")} icon={iconSettings} isSelected={this.isSelectedPage("settings")} />
          </View>
          <View style={styles.iconContainer}>
            <HeaderIcon onPress={() => this.selectPage("home")} icon={iconHome} isSelected={this.isSelectedPage("home")} />
          </View>
          <View style={styles.iconContainer}>
            <HeaderIcon onPress={() => this.selectPage("movies")} icon={iconMovies} isSelected={this.isSelectedPage("movies")} />
          </View>
        </View>
      </View>
    );
  }
}

Header.propTypes = {
  navigation: PropTypes.object,
};

export default Header;
