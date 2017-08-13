import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Header, Page } from 'mover/src/components';
import { ListItem } from 'mover/src/pages/Movies/components';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '500',
    marginTop: 10,
  }
});

class Movies extends Component {
  render() {
    return (
      <Page noMargin style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>To see</Text>
          {
            this.props.movies.map((movie, index) => (
              <ListItem
                key={index}
                movie={movie}
                onDelete={() => this.props.removeUserMovie(movie)}
                onAdd={() => this.props.addUserSeenMovie(movie)}
                openMovie={() => this.props.navigation.navigate('movieDetail', {movie})}
              />
            ))
          }

          <Text style={styles.title}>Seen</Text>
          {
            this.props.seenMovies.map((movie, index) => (
              <ListItem
                key={index}
                movie={movie}
                onDelete={() => this.props.removeUserSeenMovie(movie)}
                openMovie={() => this.props.navigation.navigate('movieDetail', {movie})}
              />
            ))
          }
        </ScrollView>
      </Page>
    );
  }
}

Movies.navigationOptions = {
  tabBarVisible: false,
  header: () => null
};

Movies.PropTypes = {
  navigation: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  seenMovies: PropTypes.array.isRequired,
  removeUserMovie: PropTypes.func.isRequired,
  removeUserSeenMovie: PropTypes.func.isRequired,
  addUserSeenMovie: PropTypes.func.isRequired
};

export default Movies;
