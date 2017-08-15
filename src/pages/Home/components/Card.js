import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';
import PropTypes from "prop-types";
import React, { Component } from 'react';
import Interactable from 'react-native-interactable';
import themoviedb from "mover/src/services/themoviedb";

const Screen = Dimensions.get('window');
const cardWidth = 340;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: cardWidth,
    left: (Screen.width - cardWidth) / 2
  },
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
    width: cardWidth,
    height: 460,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlayText: {
    fontSize: 60,
    color: 'white'
  },
  text: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
    margin: 5
  },
});

class Card extends Component {
  constructor(props) {
    super(props);
    this._deltaX = new Animated.Value(0);
  }

  onCardSnap = (event) => {
    const snapPointIndex = event.nativeEvent.index;
    if(snapPointIndex === 0) {
      this.props.swipeRight(this.props.movie);
    }
    if(snapPointIndex !== 1) {
      this.props.removeCard(this.props.movie);
    }
  }

  render() {
    return (
      <Interactable.View
        style={[{zIndex: this.props.zIndex}, this.props.style, styles.container]}
        ref="myCard"
        horizontalOnly={true}
        snapPoints={[
          {x: 500},
          {x: 0, damping: 0.8},
          {x: -500}
        ]}
        onSnap={this.onCardSnap.bind(this)}
        animatedValueX={this._deltaX}
      >
        <TouchableWithoutFeedback onPress={() => this.props.onClickCard(this.props.movie)}>
          <Animated.View style={[{
            transform: [{
              rotate: this._deltaX.interpolate({
                inputRange: [-250, 0, 250],
                outputRange: ['10deg', '0deg', '-10deg']
              })
            }]
          }]}>

          <View style={styles.card}>
            <Image
              style={styles.thumbnail}
              source={{uri: themoviedb.getCoverUrl(this.props.movie.poster_path)}}
            />
            <Text style={styles.text} numberOfLines={1} >{this.props.movie.original_title}</Text>
          </View>

          <Animated.View style={[styles.overlay, {backgroundColor: '#2f9a5d'}, {
            opacity: this._deltaX.interpolate({
              inputRange: [0, 120],
              outputRange: [0, 0.8],
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp'
            })
          }]}>
            <Text style={styles.overlayText}>Yep</Text>
          </Animated.View>

          <Animated.View style={[styles.overlay, {backgroundColor: '#de6d77'}, {
             opacity: this._deltaX.interpolate({
               inputRange: [-120, 0],
               outputRange: [0.8, 0],
               extrapolateLeft: 'clamp',
               extrapolateRight: 'clamp'
             })
           }]}>
             <Text style={styles.overlayText}>Nope</Text>
           </Animated.View>

           <Animated.View style={[styles.overlay, {backgroundColor: '#2f9a5d'}, {
             opacity: this._deltaX.interpolate({
               inputRange: [0, 120],
               outputRange: [0, 0.8],
               extrapolateLeft: 'clamp',
               extrapolateRight: 'clamp'
             })
           }]}>
             <Text style={styles.overlayText}>Yep</Text>
           </Animated.View>
         </Animated.View>
       </TouchableWithoutFeedback>
     </Interactable.View>
    )
  }
};

Card.propTypes = {
  movie: PropTypes.object.isRequired,
  swipeRight: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
  onClickCard: PropTypes.func.isRequired,
  zIndex: PropTypes.number,
};

Card.defaultProps = {
  zIndex: 0,
};

export default Card;
