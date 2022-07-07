import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TextInput,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder='Username' icon='email' />
    </Screen>
  );
}
