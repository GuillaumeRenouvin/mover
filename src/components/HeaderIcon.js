import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, Animated } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 20,
  }
});

class HeaderIcon extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()} >
        <AnimatedIcon
          name={this.props.iconName}
          style={[
            styles.iconStyle,
            {
              transform: [{
                scale: this.props.position.interpolate({
                  inputRange: this.props.inputRange,
                  outputRange: this.props.outputRange,
                }),
              }],
              color: this.props.position.interpolate({
                inputRange: this.props.inputRange,
                outputRange: this.props.outputRangeColor,
              })
            }
          ]}
        />
      </TouchableOpacity>
    );
  }
}

HeaderIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  inputRange: PropTypes.array.isRequired,
  outputRange: PropTypes.array.isRequired,
  outputRangeColor: PropTypes.array.isRequired,
  position: PropTypes.object.isRequired,
};

export default HeaderIcon;
