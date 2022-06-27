import React from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text } from 'react-native';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import AppText from './app/components/AppText';
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AppText>
        I love nothing. My first stress reducing app. lesgoooooooooo
      </AppText>
    </View>
  );
}
