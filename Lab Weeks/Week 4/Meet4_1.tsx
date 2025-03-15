import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const Meet4_1 = () => {
    return(
    <View style={styles.latar}>
        <Text>
            <TouchableOpacity onPress={()=>Alert.alert("kembali")}>
                <Text style={styles.action}>{ "<-- BACK" }</Text>
            </TouchableOpacity>

            <Text style={styles.tulisan}>PROFILE</Text>
        </Text>
    </View>
    );
};

const styles = StyleSheet.create({
    latar:{
        backgroundColor: '#F0F0F0',
        width: "100%",
        padding: 20,
        paddingTop: 40,
    },
    action:{
        fontSize: 20,
        fontWeight: "500",
        marginRight: 40,
        marginTop: 10,
    },
    tulisan:{
        fontSize: 20,
        fontWeight: '900',
    },
});
export default Meet4_1;