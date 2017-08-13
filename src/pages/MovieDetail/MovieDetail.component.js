import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Text } from 'react-native';
import { Header, Page } from 'mover/src/components';

class MovieDetail extends Component {
  render() {
    return (
      <Page noMargin >
        <Text>Detail {this.props.movie.original_title}</Text>
      </Page>
    );
  }
}

MovieDetail.PropTypes = {
  movie: PropTypes.object.isRequired
};

MovieDetail.navigationOptions = {
  tabBarVisible: false,
};

export default MovieDetail;
