import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Meet7_latih1 from "./Lab Weeks/Week 7/Meet7_Lat1";
import HomeScreen from "./Lab Weeks/Week 5/Lab/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigasiDrawer />
  );
};

const NavigasiDrawer = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Meet 7" component={Meet7_latih1} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAF7",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
