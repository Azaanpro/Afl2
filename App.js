import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

import LoginForm from './components/LoginForm';

//Når vi kører vores APP.Js vises Login skærmem som det første
export default class App extends Component {
  render() {
    return <LoginForm />;
  }
}

//Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
