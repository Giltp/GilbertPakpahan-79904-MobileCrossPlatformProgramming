import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Meet5_Profile = ({navigation}) => {
    return (
        <View style={{ justifyContent:"center", flex:1, alignItems:"center"}}>
            <Text>Ini adalah Profile saya</Text>
            
            <Button title="Home" onPress={() => navigation.navigate("Home")}></Button>
        </View>
    );
};

export default Meet5_Profile;