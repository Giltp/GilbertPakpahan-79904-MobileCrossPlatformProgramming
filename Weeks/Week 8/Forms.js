import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { updatePost } from "./Axios";

const Forms = ({ route, navigation }) => {
  const { post, refresh } = route.params;
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleUpdate = () => {
    const updatedData = { ...post, title, body };
    updatePost(post.id, updatedData)
      .then((res) => {
        if (res.status === 200) {
          Alert.alert("Success", "Post updated successfully", [
            {
              text: "OK",
              onPress: () => {
                refresh(); // Refresh posts in HomeScreen
                navigation.goBack();
              },
            },
          ]);
        }
      })
      .catch((err) => {
        console.error("Failed to update post:", err);
        Alert.alert("Error", "Failed to update post");
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        value={body}
        onChangeText={setBody}
        placeholder="Body"
        multiline
        numberOfLines={4}
      />
      <Button title="Update Post" onPress={handleUpdate} />
    </View>
  );
};

export default Forms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 16,
    borderRadius: 4,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
});
