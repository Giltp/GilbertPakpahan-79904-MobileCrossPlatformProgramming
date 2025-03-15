import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { Card } from "react-native-paper";
import styles from "../../Week 2/ProfilesScreenStyles.js";
import { Ionicons } from '@expo/vector-icons'; // Add this import if you have Expo

const imageMapping = {
  "A.jpg": require("../../../assets/Images/A.jpg"),
  "Axel Tidur.jpg": require("../../../assets/Images/Axel Tidur.jpg"),
  "Javarel Tidur.jpg": require("../../../assets/Images/Javarel Tidur.jpg"),
  "Efri Marah.jpg": require("../../../assets/Images/Efri Marah.jpg"),
  "Batara Hepi.jpg": require("../../../assets/Images/Batara Hepi.jpg"),
  "Fikri Keren.jpg": require("../../../assets/Images/Fikri Keren.jpg"),
};

const Profile = ({ navigation, route }) => {
    const { user } = route.params;
    const imageSource = imageMapping[user.photo_url.split("/").pop()];

    return (
        <ScrollView 
          style={{ flex: 1, backgroundColor: "#FFFAF7" }}
          contentContainerStyle={{ alignItems: "center", paddingVertical: 20 }}
        >
          <StatusBar barStyle="dark-content" backgroundColor="#FFFAF7" />
          
          <Card style={styles.profileCard}>
            <Card.Content style={{ alignItems: "center" }}>
              <Image source={imageSource} style={styles.profileImage} />
              <Text style={styles.profileName}>{user.name}</Text>
              <Text style={styles.profileNIM}>{user.nim}</Text>
            </Card.Content>
          </Card>
        
          <Card style={styles.infoCard}>
            <Card.Content>
              <Text style={styles.sectionTitle}>Contact Information</Text>
              <Text style={styles.profileLabel}>Email</Text>
              <Text style={styles.profileValue}>{user.email}</Text>
            </Card.Content>
          </Card>
        
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            {/* If you're using Expo, you can use the icon below */}
            <Ionicons name="arrow-back" size={18} color="#fff" style={{ marginRight: 8 }} />
          </TouchableOpacity>
        </ScrollView>
    );
};

export default Profile;