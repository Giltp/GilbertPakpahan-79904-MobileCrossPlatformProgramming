import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "./Lab Weeks/Week 6/Lab/Input";

export default function App() {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");

  return (
    <View style={styles.container}>
      <Text>{name || "Your Name"} - {nim || "00000000000"}</Text>
      <Input label="Name" value={name} onChangeText={setName} />
      <Input label="NIM" value={nim} onChangeText={setNim} keyboardType="numeric" />
    </View>
  );
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
