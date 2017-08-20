import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from 'react-native';
import { Header, Page } from 'mover/src/components';
import appStyle from 'mover/src/appStyle';
import { CardDisplayer } from './components';

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
  componentWillMount() {
    this.props.loadGenres();
    this.props.loadMovies();
  }

  render() {
    return (
      <Page noMargin>
        <CardDisplayer
          style={{flex: 1}}
          cards={this.props.movies}
          swipeRight={(movie) => this.props.addUserMovie(movie)}
          removeCard={() => this.props.removeMovie()}
          loadCards={() => this.props.loadMovies()}
          getArrayIdGenres={(genre_ids) => this.props.getArrayIdGenres(genre_ids)}
          onClickCard={(movie) => this.props.navigation.navigate('movieDetail', {movie})}
        />
      </Page>
    );
  }
}

Home.navigationOptions = {
  header: () => null,
};

Home.PropTypes = {
  navigation: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  loadMovies: PropTypes.array.isRequired,
  loadGenres: PropTypes.array.isRequired,
  addUserMovie: PropTypes.func.isRequired,
  removeMovie: PropTypes.func.isRequired,
  getArrayIdGenres: PropTypes.func.isRequired,
};

export default Home;
