import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Alert, Platform } from "react-native";
import Animated, {ReduceMotion, useAnimatedStyle, useSharedValue, withSpring, withTiming, Easing} from "react-native-reanimated";


const Meet7_latih1 = () => {
    const lebarScreen = Dimensions.get("window").width;
    const tinggiScreen = Dimensions.get("window").height;
    const [infoOrientasi, setInfoOrientasi] = useState("Portrait");
    
    const posXtiming = useSharedValue(-200);
    const posXspring = useSharedValue(200);

    const AnimasiStyle1 = useAnimatedStyle(()=>({
        transform: [{translateX: posXtiming.value}],
    }));
    const AnimasiStyle2 = useAnimatedStyle(()=>({
        transform: [{translateX: posXspring.value}],
    }));

    useEffect(()=>{
        const orientasiBerubah = () => {
            const {width, height} = Dimensions.get("window");
            if (width > height) {
                setInfoOrientasi("Layar Kamu Landscape");
            }else{
                setInfoOrientasi("Layar Kamu Portrait");
            }
        }

        Dimensions.addEventListener("change", orientasiBerubah)

        posXtiming.value = withTiming(0, { duration: 1000, easing: Easing.bounce, reduceMotion: ReduceMotion.System });
        posXspring.value = withSpring(0, { damping: 10, stiffness: 100});
    });

    return(
        <View style={{ flex:1, alignItems: "center", justifyContent: "center"}}>
            <Animated.View style={AnimasiStyle2}>
                <Animated.Text style={AnimasiStyle1}>Week 7 Lat 1</Animated.Text>
                <Text>Lebar Screen: {lebarScreen}</Text>
                <Text>Tinggi Screen: {tinggiScreen}</Text>
                <Text>Orientasi Device: {infoOrientasi}</Text>
                <Text>Your OS: {Platform.OS}</Text>
                <Text>OS Version: {Platform.Version}</Text>
                <Animated.Text style={AnimasiStyle1}>Your OS: {Platform.OS}</Animated.Text>
                <Animated.Text style={AnimasiStyle1}>OS Version: {Platform.Version}</Animated.Text>
                <Animated.Text style={AnimasiStyle2}>Your OS: {Platform.OS}</Animated.Text>
                <Animated.Text style={AnimasiStyle2}>OS Version: {Platform.Version}</Animated.Text>
            </Animated.View>
            {/*<Text>Week 7 Lat 1</Text>
            <Text>Lebar Screen: {lebarScreen}</Text>
            <Text>Tinggi Screen: {tinggiScreen}</Text>
            <Text>Orientasi Device: {infoOrientasi}</Text>
            <Text>Your OS: {Platform.OS}</Text>
            <Text>OS Version: {Platform.Version}</Text>
            <Animated.Text style={AnimasiStyle1}>Your OS: {Platform.OS}</Animated.Text>
            <Animated.Text style={AnimasiStyle1}>OS Version: {Platform.Version}</Animated.Text>
            <Animated.Text style={AnimasiStyle2}>Your OS: {Platform.OS}</Animated.Text>
            <Animated.Text style={AnimasiStyle2}>OS Version: {Platform.Version}</Animated.Text>*/}
        </View>
    );
};

export default Meet7_latih1;