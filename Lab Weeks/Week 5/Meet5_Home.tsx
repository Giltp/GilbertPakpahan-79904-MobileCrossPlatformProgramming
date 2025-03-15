import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Meet5_Home = ({navigation}) => {
    return (
        <View style={{ justifyContent:"center", flex:1, alignItems:"center"}}>
            <Text>Ini adalah halaman Home</Text>

            <Button title="Profile" onPress={() => navigation.navigate("Profile")}></Button>
            
            <Button title="Meet6_Latih1" onPress={() => navigation.navigate("Meet6_Latih1")}></Button>
        </View>
    );
};

export default Meet5_Home;