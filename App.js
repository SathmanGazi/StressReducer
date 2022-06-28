import React from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
export default function App() {
  return <WelcomeScreen />;
}
