import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, SafeAreaView} from 'react-native';

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>Hello World</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default AppNavContainer;
