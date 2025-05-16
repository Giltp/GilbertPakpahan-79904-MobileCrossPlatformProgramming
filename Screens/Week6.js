import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../Weeks/Week 6/Lab/Input';

export default function Week6() {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name || 'Your Name'} - {nim || '00000000000'}</Text>
      <Input label="Name" value={name} onChangeText={setName} />
      <Input label="NIM" value={nim} onChangeText={setNim} keyboardType="numeric" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
