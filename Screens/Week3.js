import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Counter from '../Weeks/Week 3/Counter';
//import Profile from '../Lab Weeks/Week 3/Profile';

export default function Week3() {
  return (
    <View style={styles.container}>
      {/* Aktifkan sesuai kebutuhan */}
      {/* <Profile /> */}
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
