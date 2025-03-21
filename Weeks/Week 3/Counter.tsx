import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

interface ICounter {
    handleIncrement: () => void;
    handleDecrement: () => void;
    passNameValue: () => void;
    value: number;
}

const Counter = ({
    handleDecrement,
    handleIncrement,
    passNameValue,
    value,
}: ICounter) => {
    return (
        <View>
            <Text style={{ fontSize: 20 }}>     Age: {value} </Text>

            <Button title="Increment" onPress={handleIncrement}></Button>

            <Button title="Decrement" onPress={handleDecrement}></Button>

            <Button title="Pass Value" onPress={passNameValue}></Button>
        </View>
    );
};

export default Counter;