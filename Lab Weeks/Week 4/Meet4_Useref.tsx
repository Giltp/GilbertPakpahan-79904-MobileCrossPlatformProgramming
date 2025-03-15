import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const Meet4_Useref = () => {
    const angka = useRef(0);
    const [nilai, setNilai] = useState(0);

    const tambahAngka = () => {
        angka.current ++;
        console.log("Muncul di CMD yaitu: " + angka.current);
    };

    const tampilAngka = () => {
        setNilai(angka.current);
    };
    
    return(
        <View>
            <Text>Cara Penggunaan Useref</Text>
            <Button title="Tambah Angka" onPress={tambahAngka}></Button>
            <Text>Hasil : {nilai} </Text>
            <Button title="Tampilkan angka Useref" onPress={tampilAngka}></Button>
        </View>
    );
};

const styles = StyleSheet.create ({

});

export default Meet4_Useref;