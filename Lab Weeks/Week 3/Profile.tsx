import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Counter from "./Counter";

const Profile = () => {
    const [age, setAge] = useState(0);
    const [name, setName] = useState("");
    const [displayName, setDisplayName] = useState("");
    {/*variable = angka, function = setAngka. Tidak bisa ubang angka secara dinamis*/}

    const tambahAge = () => {
        setAge(age + 1);
    };

    const kurangAge = () => {
        setAge(age - 1);
    }

    const isiNama = () => {
        setDisplayName(name);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}> Halo, namaku adalah {displayName} </Text>
            <Text style={styles.ageText}> Umurku, {age} tahun </Text>
            <Counter 
            value={age}
            handleDecrement={kurangAge}
            handleIncrement={tambahAge}
            passNameValue={isiNama}
            />
            <TextInput
                style={styles.input}
                placeholder="Masukkan Nama"
                value={name}
                onChangeText={setName}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    alignItems: "center",
    padding: 50,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  ageText: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Profile;