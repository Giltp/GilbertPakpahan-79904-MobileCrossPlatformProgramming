import React from 'react';
import { StyleSheet } from 'react-native';
import Meet7_latih1 from '../Weeks/Week 7/Meet7_Lat1';
import HomeScreen from '../Weeks/Week 5/Lab/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function Week7() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Meet 7 - Latihan 1" component={Meet7_latih1} />
      </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
