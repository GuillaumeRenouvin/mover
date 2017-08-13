import { StyleSheet, Text, View, Image } from 'react-native';
import React, { Component } from 'react';
import themoviedb from "mover/src/services/themoviedb";

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    flex: 1,
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  }
});

class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: themoviedb.getCoverUrl(this.props.poster_path)}} />
        <Text style={styles.text}>{this.props.original_title}</Text>
      </View>
    )
  }
};

export default Card;
