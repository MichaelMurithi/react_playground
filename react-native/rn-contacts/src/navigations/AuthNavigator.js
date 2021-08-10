import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';

const Login = () => {
  return (
    <View>
      <Text>Hi From Contacts</Text>
    </View>
  );
};
const SignUp = () => {
  return (
    <View>
      <Text>Hi From Contact Detail</Text>
    </View>
  );
};
const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
