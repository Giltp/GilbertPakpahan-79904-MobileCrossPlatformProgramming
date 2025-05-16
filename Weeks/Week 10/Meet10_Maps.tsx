import React from "react";
import MapView, {Marker} from "react-native-maps";
import { StyleSheet, View } from "react-native";

const Meet10_Maps = () => {
    const lokasi={
        latitude: -6.1751,
        longitude: 106.6179548,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    return (
        <View style={styles.container}>
            <MapView style={{width: "70%", height: "70%"}} initialRegion={lokasi} >
            <Marker 
                coordinate={{
                    latitude: lokasi.latitude,
                    longitude: lokasi.longitude,
                }}
                title={"Lokasi Saya"}
                description={"Ini adalah lokasi saya"} 
            />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Meet10_Maps;