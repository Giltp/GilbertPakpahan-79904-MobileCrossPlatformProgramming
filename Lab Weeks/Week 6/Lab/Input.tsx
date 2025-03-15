import React from "react";
import { View, Text, StyleSheet, TextInput, KeyboardTypeOptions } from "react-native";

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
}

const Input: React.FC<InputProps> = ({ label, value, onChangeText, keyboardType = "default" }) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput
        placeholder={`Input your ${label}`}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: 200,
    marginVertical: 5,
  },
});

export default Input;
