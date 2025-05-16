import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Week 5 Components
import Meet5_Home from '../Weeks/Week 5/Meet5_Home';
import Meet5_Profile from '../Weeks/Week 5/Meet5_Profile';

// Week 5 Tugas (Lab)
import Email from '../Weeks/Week 5/Lab/Email';
import HomeScreen from '../Weeks/Week 5/Lab/HomeScreen';
import UserList from '../Weeks/Week 5/Lab/UserList';
import Profile from '../Weeks/Week 5/Lab/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function Week5() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Meet5 Drawer" component={Meet5Drawer} />
      <Tab.Screen name="Tugas Minggu 5" component={Week5Stack} />
    </Tab.Navigator>
  );
}

// Navigasi Drawer antara Home & Profile (Week 5)
const Meet5Drawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Meet5 Home" component={Meet5_Home} />
      <Drawer.Screen name="Meet5 Profile" component={Meet5_Profile} />
    </Drawer.Navigator>
  );
};

// Navigasi Stack untuk tugas-tugas lainnya
const Week5Stack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen name="User List" component={UserList} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
});
