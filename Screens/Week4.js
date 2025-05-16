import React from 'react';
import { StyleSheet, View } from 'react-native';
import Meet4_1 from '../Weeks/Week 4/Meet4_1';
import Meet4_Card from '../Weeks/Week 4/Meet4_Card';
import Meet4_Useref from '../Weeks/Week 4/Meet4_Useref';

export default function Week4() {
  return (
    <View style={styles.container}>
      <Meet4_1 />
      <Meet4_Card
        teksJudul={"Ini Judul Pertama"}
        teksIsi={"Lorem Ipsum Dolor Sit Amet"}
        warna={"#FFF0FF"}
      />
      <Meet4_Card
        teksJudul={"Ini Judul Kedua"}
        teksIsi={"Lorem Ipsum Dolor Sit Amet"}
        warna={"#FFFFF0"}
      />
      <Meet4_Useref />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
