// @flow
import { StyleSheet, Text, View } from 'react-native';
import React, { Component, PropTypes } from 'react';

const styles = StyleSheet.create({
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class NoMoreCards extends Component {
  componentWillMount() {
    this.props.loadCards();
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
};

NoMoreCards.propTypes = {
  loadCards: PropTypes.func.isRequired,
};

export default NoMoreCards;
