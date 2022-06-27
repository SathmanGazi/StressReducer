import React from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: 'royalblue',
          borderRadius: 50,
        }}
      ></View>
    </View>
  );
}
