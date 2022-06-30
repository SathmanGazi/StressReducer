import React from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
export default function App() {
  return (
    <View
      style={{
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title='Bengal Cat'
        price='The Bengal cat is the only domestic breed of cat that has rosette markings.'
        image={require('./app/assets/bengalcat.jpg')}
      />
    </View>
  );
}
