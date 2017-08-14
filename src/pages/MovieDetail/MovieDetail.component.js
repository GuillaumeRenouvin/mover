import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Page } from 'mover/src/components';
import Carousel from 'react-native-looped-carousel';
import Lightbox from 'react-native-lightbox';
import themoviedb from "mover/src/services/themoviedb";

const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: '#d3d3d3'
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500'
  },
  content: {
    fontSize: 13,
    color: 'gray'
  },
  overview: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'justify'
  }
});

class MovieDetail extends Component {
  render() {
    return (
      <Page noMargin >
        <Carousel
          delay={5000}
          autoplay
          style={{flex: 1}}
          pageInfo
          currentPage={0}
        >
          <Lightbox activeProps={{backgroundColor: 'black', resizeMode: 'contain'}} style={{flex: 1}}>
            <Image style={styles.cover} source={{uri: themoviedb.getCoverUrl(this.props.movie.poster_path)}} />
          </Lightbox>
          <Lightbox activeProps={{backgroundColor: 'black', resizeMode: 'contain'}} style={{flex: 1}}>
            <Image style={styles.cover} source={{uri: themoviedb.getCoverUrl(this.props.movie.backdrop_path)}} />
          </Lightbox>
        </Carousel>
        <ScrollView style={styles.contentContainer}>
          <Text style={styles.title} >{this.props.movie.original_title}</Text>
          <Text style={styles.content} >{this.props.movie.release_date} - {this.props.movie.vote_average}/10</Text>
          <Text style={styles.overview} >{this.props.movie.overview}</Text>
        </ScrollView>
      </Page>
    );
  }
}

MovieDetail.PropTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieDetail;
