import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  checkContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
  },
  nameStyle: {
    fontWeight: '400',
    fontSize: 16,
  }
});

class SelectItem extends Component {
  render = () => {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={styles.titleContainer}>
          <Text style={styles.nameStyle}>{this.props.item.name}</Text>
        </View>
        <View style={styles.checkContainer}>
          <Icon name={this.props.isSelected ? 'check' : undefined} color='red' size={18} />
        </View>
      </TouchableOpacity>
    );
  }
}

SelectItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default SelectItem;
