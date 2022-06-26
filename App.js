import React from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/catto.jpg')} />

      <Image
        source={require('./assets/cat-icon-0.png')}
        style={styles.img_cover}
      ></Image>
      <Text style={(styles.img_cover, styles.text)}>
        "Sign up Biatch. Meow meow mother fucker"
      </Text>

      <View
        style={{
          backgroundColor: 'tomato',
          height: 100,
          alignSelf: 'stretch',
        }}
      />
      <View
        style={{
          backgroundColor: 'blue',
          height: 100,
          alignSelf: 'stretch',
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img_cover: {
    position: 'absolute',
    top: 20,
    width: 100,
    height: 100,
    padding: 20,
  },
  text: {
    padding: 30,
    fontWeight: 'bold',
  },
});
