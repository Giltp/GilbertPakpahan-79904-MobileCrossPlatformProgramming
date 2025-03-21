import React from "react";
import { ScrollView, View, TouchableOpacity, Image, Text, StatusBar } from "react-native";
import styles from "../../Week 2/ProfilesScreenStyles.js";
import { Card } from "react-native-paper";
import userData from "../../../data.json";
import Animated, { 
  SlideInLeft, 
  SlideInRight,
  FadeIn,
  ZoomIn
} from "react-native-reanimated";

const imageMapping = {
  "A.jpg": require("../../../assets/Images/A.jpg"),
  "Axel Tidur.jpg": require("../../../assets/Images/Axel Tidur.jpg"),
  "Javarel Tidur.jpg": require("../../../assets/Images/Javarel Tidur.jpg"),
  "Efri Marah.jpg": require("../../../assets/Images/Efri Marah.jpg"),
  "Batara Hepi.jpg": require("../../../assets/Images/Batara Hepi.jpg"),
  "Fikri Keren.jpg": require("../../../assets/Images/Fikri Keren.jpg"),
};

// Fungsi untuk menghasilkan jenis animasi berdasarkan indeks
const getAnimationType = (index) => {
  // Memilih animasi berdasarkan modulus dari indeks
  switch (index % 4) {
    case 0:
      return SlideInLeft;
    case 1:
      return SlideInRight;
    case 2:
      return FadeIn;
    case 3:
      return ZoomIn;
    default:
      return SlideInLeft;
  }
};

const UserList = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFAF7" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFAF7" />
      <ScrollView 
        contentContainerStyle={{ 
          alignItems: "center", 
          paddingVertical: 16,
          paddingHorizontal: 8
        }}
      >
        <Text style={{
          fontSize: 24,
          fontWeight: "600",
          color: "#3A3A3A",
          marginBottom: 16,
          alignSelf: "flex-start",
          marginLeft: 20
        }}>
          Users
        </Text>
        
        {userData.map((user, index) => (
          <Animated.View 
            key={user.nim}
            entering={getAnimationType(index).delay(300 * index)}
            style={{ width: "100%" }}
          >
            <TouchableOpacity 
              onPress={() => navigation.navigate("Profile", { user })}
              style={{ width: "100%" }}
            >
              <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                  <Image
                    source={imageMapping[user.photo_url.split("/").pop()]}
                    style={styles.avatar}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                  </View>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );
};

export default UserList;