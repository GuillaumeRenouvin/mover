import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Page } from 'mover/src/components';
import appStyle from 'mover/src/appStyle';
import { Header, CardDisplayer } from 'mover/src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: appStyle.font.size.huge,
    textAlign: 'center',
    margin: appStyle.grid.x1,
  },
  instructions: {
    textAlign: 'center',
    color: appStyle.colors.darkGray,
    marginBottom: appStyle.grid.x1,
  },
});

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  state = {
    movies: []
  };
  props: PropsType;

  componentWillMount() {
    this.setState({
      movies: this.props.movies
    });
  }

  render() {
    return (
      <Page>
        <CardDisplayer
          style={{flex: 1}}
          cards={this.props.movies}
          swipeRight={(movie) => this.props.addUserMovie(movie)}
          removeCard={() => this.props.removeMovie()}
          loadCards={() => this.props.loadMovies()}
        />
      </Page>
    );
  }
}

Home.navigationOptions = {
  tabBarVisible: false
};

type PropsType = {
  navigation: any,
  movies: PropTypes.array.isRequired,
  loadMovies: PropTypes.array.isRequired,
  addUserMovie: PropTypes.func.isRequired,
  removeMovie: PropTypes.func.isRequired
};

export default Home;
