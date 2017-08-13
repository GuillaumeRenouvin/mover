import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity, Image } from "react-native";

class HeaderIcon extends Component {
  render() {
    const iconStyle = {
      height: this.props.isSelected ? 30 : 20,
      width: this.props.isSelected ? 30 : 20,
      resizeMode: 'contain'
    }
    return (
      <TouchableOpacity onPress={() => this.props.onPress()} >
        <Image style={iconStyle} source={this.props.icon} />
      </TouchableOpacity>
    );
  }
}

HeaderIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

HeaderIcon.defaultProps = {
  isSelected: false,
};

export default HeaderIcon;
