/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Text, View} from '@react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavContainer from './src/navigations';

const App: () => Node = () => {
  return <AppNavContainer></AppNavContainer>;
};
export default App;
