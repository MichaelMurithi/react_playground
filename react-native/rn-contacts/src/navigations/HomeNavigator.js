import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';

const Contacts = () => {
  return (
    <View>
      <Text>Hi From Contacts</Text>
    </View>
  );
};
const ContactDetail = () => {
  return (
    <View>
      <Text>Hi From Contact Detail</Text>
    </View>
  );
};
const CreateContact = () => {
  return (
    <View>
      <Text>Hi From create Contacts</Text>
    </View>
  );
};
const Settings = () => {
  return (
    <View>
      <Text>Hi From Settings</Text>
    </View>
  );
};
const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Contacts">
      <HomeStack.Screen name="Contacts" component={Contacts} />
      <HomeStack.Screen name="Contact" component={ContactDetail} />
      <HomeStack.Screen name="CreateContact" component={CreateContact} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
