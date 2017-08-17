import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Page } from 'mover/src/components';
import Carousel from 'react-native-looped-carousel';
import Lightbox from 'react-native-lightbox';
import themoviedb from "mover/src/services/themoviedb";
import Icon from 'react-native-vector-icons/FontAwesome';

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
  content: {
    fontSize: 13,
    color: 'gray'
  },
  overview: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'justify'
  },
  titleText: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    margin: 5
  },
  text: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 15,
    color: 'grey',
    margin: 5
  },
  textGenres: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 15,
    fontStyle: 'italic',
    color: 'grey',
    margin: 5
  },
});

class MovieDetail extends Component {
  render() {
    return (
      <Page noMargin >
        <Carousel
          delay={2500}
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
          <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.titleText} >{this.props.movie.original_title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 5}}>
              <Text style={styles.titleText} >{this.props.movie.vote_average}</Text>
              <Icon
                name='star'
                size={19}
              />
            </View>
          </View>
          <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5}}>
              <Icon
                name='calendar'
                size={19}
                color='grey'
              />
              <Text style={styles.text} >{this.props.movie.release_date.substring(0, 4)}</Text>
            </View>
            <Text style={styles.textGenres} >{this.props.movie.genres.join('/')}</Text>
          </View>
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
