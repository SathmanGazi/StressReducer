import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      resizeMode='contain'
      source={require('../assets/catto.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/cat-icon-0.png')}
        />
        <Text style={styles.text}>
          Watch some cat pics and gifs, Meow Meow motherfuckers!!!
        </Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
  text: {
    color: 'white',
    fontWeight: '900',
    fontStyle: 'italic',
    fontSize: 20,
  },
});
export default WelcomeScreen;
