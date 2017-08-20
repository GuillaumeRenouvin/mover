import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, ScrollView, Modal, TouchableOpacity, Platform } from "react-native";
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SelectItem } from ".";

const MODAL_MARGIN_TOP = Platform.OS === 'android' ? 0 : 22;

const styles = StyleSheet.create({
  modalHeaderContainer: {
    marginTop: MODAL_MARGIN_TOP,
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalTitle: {
    fontWeight: '500',
    color: '#3f3f3f',
    marginLeft: 15,
    marginBottom: 8,
    fontSize: 16
  },
  closeButtonContainer: {
    position: 'absolute',
    right: 10
  },
  closeText: {
    color: 'red'
  },
  iconContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
  },
  itemText: {
    flex: 1,
    color: '#696969',
    marginLeft: 20,
    fontSize: 16,
    fontWeight: '500'
  }
});

class ModalSelect extends Component {
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  renderSelectList = (list) => {
    return(
      <ScrollView style={{paddingTop: 20, backgroundColor: '#f1f1f1', borderColor: '#dbdbdb', borderWidth: 0.5}}>
        {
          list.map((object, index) => (
            <View key={object.id} >
              <SelectItem
                onPress={() => object.isSelected ? this.props.removeItem(object.id) : this.props.addItem(object.id)}
                isSelected={object.isSelected}
                item={object}
              />
              { index != list.length +1 &&
                <View style={{ marginLeft: 20, borderBottomWidth: 0.5, borderColor: '#dbdbdb'}} />
              }
            </View>
          ))
        }
      </ScrollView>
    );
  }

  renderModalHeader = () => {
    return(
      <View style={styles.modalHeaderContainer}>
        <Text style={styles.modalTitle}>{this.props.selectTitle}</Text>
        <TouchableOpacity
          onPress={() => this.setModalVisible(!this.state.modalVisible)}
          style={styles.closeButtonContainer}
        >
          <Text style={styles.closeText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render = () => {
    const itemText = _(this.props.items).filter(object => object.isSelected).map(object => object.name).value().join(', ');
    return (
      <View style={{marginBottom: 40}}>
        <Modal
          animationType={"slide"}
          visible={this.state.modalVisible}
        >
          { this.renderModalHeader() }
          { this.renderSelectList(this.props.items) }
        </Modal>
        <Text style={styles.modalTitle}>{this.props.selectTitle}</Text>
        <TouchableOpacity
          onPress={() => { this.setModalVisible(true) }}
          style={styles.itemContainer}
        >
          <Text style={styles.itemText}>{itemText}</Text>
          <View style={styles.iconContainer}>
            <Icon name='angle-right' color='#696969' size={25} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

ModalSelect.propTypes = {
  selectTitle: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default ModalSelect;
