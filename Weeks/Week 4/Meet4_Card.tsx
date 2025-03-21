import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Meet4_Card = ({teksJudul, teksIsi, warna, colorteks}) => {
    return (
        <View style={[styles.latar, {backgroundColor: warna}]}>
            <Text style={styles.judul}>{teksJudul}</Text>
            <Text style={styles.teks}>{teksIsi}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    latar:{
        //backgroundColor: "#FFF0FF",
        margin: 10,
        padding: 30,
        width: "90%",
        borderRadius: 10,
    },
    judul:{
        color: "#000000",
        fontSize: 30,
        fontWeight: "bold",
    },
    teks:{
        color: "#000000",
        fontSize: 20,
    },
});

export default Meet4_Card;