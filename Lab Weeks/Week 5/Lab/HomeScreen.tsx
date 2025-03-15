import React from "react";
import styles from "../../Week 2/ProfilesScreenStyles.js";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={{ marginBottom: 10 }}> Navigation List </Text>
            <Button title="Go to User List" onPress={() => navigation.navigate("UserList")} />
        </View>
    );
};

export default HomeScreen;
