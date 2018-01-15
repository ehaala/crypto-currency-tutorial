import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store';
import { Header, CryptoContainer } from './src/components';

const styles = StyleSheet.create({
    fullApp: {
        backgroundColor: "black"
    }
})

const {
  fullApp
} = styles

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={fullApp}>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}