import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Button } from 'react-native';

export default function App() {
  const handlePress = () => console.log('Button Tapped');
  return (
    <SafeAreaView style={styles.container}>
      <Button color={'red'} title='Click me' onPress={handlePress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
