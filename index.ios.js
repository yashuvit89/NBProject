/**
 * Nobroker Client App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';
import SearchPage from './SearchPage'

class NBProject extends Component {
  render() {
    return (
      <View style={styles.container1}>
        <SearchPage/>
      </View>
      // <NavigatorIOS
      //   style={styles.container}
      //   initialRoute={{
      //     title: 'Home Page',
      //     component: SearchPage,
      //   }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

AppRegistry.registerComponent('NBProject', () => NBProject);
