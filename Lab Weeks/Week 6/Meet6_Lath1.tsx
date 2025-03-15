import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Switch } from "react-native";
import PropTypes from 'prop-types';
import { Picker } from "@react-native-picker/picker";
import RNDateTimePicker from '@react-native-community/datetimepicker';

const Meet6_Latih1 = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const Tampil_data = ({nama, umur}) => {
        return (
            <View>
                <Text>Nama : {nama}</Text>
                <Text>Umur : {umur}</Text>
            </View>
        );
    };

    Tampil_data.propTypes = {
        nama: PropTypes.string.isRequired,
        umur: PropTypes.number.isRequired,
    };

    return(
        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            <Text>Ini adalah meet 6</Text>
            <Tampil_data nama="Rizki" umur={30}/>

            <TextInput placeholder="Masukkan Nama " keyboardType="default" style={styles.inputan} />
            <TextInput placeholder="Masukkan Umur" keyboardType="numeric" style={styles.inputan} />
            <TextInput placeholder="Masukkan Nomor Telepon" keyboardType="phone-pad" style={styles.inputan} />
            
            <Picker selectedValue={selectedLanguage} 
            onValueChange={(itemValue, itemIndex) => setSelectedLanguage (itemValue)} style={{ width: 200 }}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="Python" value="python" />
                <Picker.Item label="C#" value="csharp" />

            </Picker>
            <View>
                <Text>Enable feature: </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <RNDateTimePicker mode="date" value={new Date()} display="calendar" />
            <RNDateTimePicker mode="time" value={new Date()} display="clock" />

        </View>
    );
};

const styles = StyleSheet.create({
    inputan: {
        borderColor:"Black",
        borderWidth:1,
        width:200,
    }
});

export default Meet6_Latih1;