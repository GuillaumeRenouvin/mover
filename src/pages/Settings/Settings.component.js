import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Text } from 'react-native';
import { Header, Page, ModalSelect } from 'mover/src/components';
import _ from 'lodash';

class Settings extends Component {
  componentWillMount() {
    this.props.loadGenres();
  }

  render() {
    const items = _.map(this.props.genres, (genre) => {
      return {...genre, isSelected: _.includes(this.props.userGenreIds, genre.id) ? true: false}
    });
    return (
      <Page noMargin>
        <ModalSelect
          selectTitle={'Genres'}
          items={items}
          addItem={(item) => this.props.addGenreIds(item)}
          removeItem={(item) => this.props.removeGenreIds(item)}
        />
      </Page>
    );
  }
}

Settings.navigationOptions = {
  header: () => null,
};

Settings.PropTypes = {
  loadGenres: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  userGenreIds: PropTypes.array.isRequired,
  addGenreIds: PropTypes.func.isRequired,
  removeGenreIds: PropTypes.func.isRequired,
};

export default Settings;
