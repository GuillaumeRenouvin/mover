import React, { Component } from 'react';
import { Text } from 'react-native';
import { Header, Page } from 'mover/src/components';

class Settings extends Component {
  render() {
    return (
      <Page>
        <Text>Settings</Text>
      </Page>
    );
  }
}

Settings.navigationOptions = {
  tabBarVisible: false,
};

export default Settings;
