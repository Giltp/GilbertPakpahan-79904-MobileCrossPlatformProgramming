import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Email from './Weeks/Week 5/Lab/Email';
import HomeScreen from './Weeks/Week 5/Lab/HomeScreen';
import UserList from './Weeks/Week 5/Lab/UserList';
import Profile from './Weeks/Week 5/Lab/Profile';

const Stack  = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Email" component={Email} />
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
});
