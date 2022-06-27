import { View, Text, Platform, StyleSheet } from 'react-native';
import React from 'react';

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Robot' : 'Avenir',
  },
});
export default AppText;
