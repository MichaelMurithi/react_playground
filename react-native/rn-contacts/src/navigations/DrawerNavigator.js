import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';

const AuthNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Contacts" component={HomeNavigator} />
    </Drawer.Navigator>
  );
};
export default AuthNavigator;
