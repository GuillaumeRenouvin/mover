import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Animated, TouchableOpacity, Slider } from 'react-native';
import Interactable from 'react-native-interactable';

const styles = StyleSheet.create({
  button: {
    width: 75,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonImage: {
    width: 40,
    height: 40,
  },
});

class Row extends Component {
  constructor(props) {
    super(props);
    this._deltaX = new Animated.Value(0);
  }

  onDelete() {
    this.refs['row'].snapTo({index: 0});
    this.props.onDelete();
  }

  onAdd() {
    this.refs['row'].snapTo({index: 0});
    this.props.onAdd();
  }

  render() {
    const isAddEnabled = this.props.onAdd ? true : false;
    let snapPoints = [
      {x: 0, damping: 1-this.props.damping, tension: this.props.tension},
      {x: -75, damping: 1-this.props.damping, tension: this.props.tension}
    ];
    if(isAddEnabled) {
      snapPoints.push({x: 75, damping: 1-this.props.damping, tension: this.props.tension});
    }
    return (
      <View>
        <View style={{backgroundColor: '#de6d77', position: 'absolute', right: 0, height: 80, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={[styles.button]} onPress={() => this.props.onDelete()} >
            <Animated.Image source={require('mover/src/assets/icon-trash.png')} style={
              [styles.buttonImage, {
                opacity: this._deltaX.interpolate({
                  inputRange: [-25, 0],
                  outputRange: [1, 0],
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp'
                }),
                transform: [{
                  scale: this._deltaX.interpolate({
                    inputRange: [-25, 0],
                    outputRange: [1, 0.7],
                    extrapolateLeft: 'clamp',
                    extrapolateRight: 'clamp'
                  })
                }]
              }
            ]} />
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: '#de6d77', position: 'absolute', right: 0, height: 80, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={[styles.button]} onPress={() => this.onDelete()} >
            <Animated.Image source={require('mover/src/assets/icon-trash.png')} style={
              [styles.buttonImage, {
                opacity: this._deltaX.interpolate({
                  inputRange: [-25, 0],
                  outputRange: [1, 0],
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp'
                }),
                transform: [{
                  scale: this._deltaX.interpolate({
                    inputRange: [-25, 0],
                    outputRange: [1, 0.7],
                    extrapolateLeft: 'clamp',
                    extrapolateRight: 'clamp'
                  })
                }]
              }
            ]} />
          </TouchableOpacity>
        </View>

        { isAddEnabled &&
          <View style={{backgroundColor: '#5EBA7D', position: 'absolute', left: 0, height: 75, flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={[styles.button]} onPress={() => this.onAdd()}>
              <Animated.Image source={require('mover/src/assets/icon-check.png')} style={
                [styles.buttonImage, {
                  opacity: this._deltaX.interpolate({
                    inputRange: [50, 75],
                    outputRange: [0, 1],
                    extrapolateLeft: 'clamp',
                    extrapolateRight: 'clamp'
                  }),
                  transform: [{
                    scale: this._deltaX.interpolate({
                      inputRange: [50, 75],
                      outputRange: [0.7, 1],
                      extrapolateLeft: 'clamp',
                      extrapolateRight: 'clamp'
                    })
                  }]
                }
              ]} />
            </TouchableOpacity>
          </View>
        }

        <Interactable.View
          ref='row'
          horizontalOnly={true}
          snapPoints={snapPoints}
          dragToss={0.01}
          animatedValueX={this._deltaX}>
          <View style={{left: 0, right: 0, height: 80, backgroundColor: 'white'}}>
            {this.props.children}
          </View>
        </Interactable.View>
      </View>
    );
  }
}

Row.PropsType = {
  onDelete: PropTypes.func.isRequired,
  onAdd: PropTypes.func,
};

export default Row;
