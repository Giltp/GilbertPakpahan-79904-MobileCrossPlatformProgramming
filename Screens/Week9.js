import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Text } from 'react-native';
import HalCamera from '../Weeks/Week 9/Meet9_Camera';

export default function Week9() {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <View style={styles.container}>
      {!showCamera ? (
        <View style={styles.buttonWrapper}>
          <Text style={styles.title}>Nama: Gilbert Parluhutan Pakpahan</Text> {/* Ganti sesuai nama */}
          <Text style={styles.title}>NIM: 00000079904</Text> {/* Ganti sesuai NIM */}
          <Button title="Buka Aplikasi Kamera" onPress={() => setShowCamera(true)} />
        </View>
      ) : (
        <HalCamera onBack={() => setShowCamera(false)} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    padding: 20,
  },
  buttonWrapper: {
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
  },
});
