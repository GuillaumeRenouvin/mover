import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import createStore from 'mover/src/modules/store';
import AppWithNavigationState from 'mover/src/AppNavigator';

class App extends React.Component {
  constructor(props) {
    super(props);
    // State used to allow hot reload in dev
    this.state = {
      store: null,
    };
  }

  componentDidMount() {
    createStore((store) => {
      this.setState({ store });
    });
  }

  render() {
    return this.state.store ? (
      <Provider store={this.state.store}>
        <AppWithNavigationState />
      </Provider>
    ) : null;
  }
}

export default App;
