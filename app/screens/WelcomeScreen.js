import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppButton from '../components/AppButton';

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
        <Text style={styles.tagline}>Meow Meow motherfuckers!!!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title='Login' />
        <AppButton title='Register' color='secondary' />
      </View>
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
  buttonsContainer: {
    padding: 20,
    width: '100%',
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

  tagline: {
    color: 'white',
    fontWeight: '600',
    paddingVertical: 10,
    fontSize: 25,
  },
});
export default WelcomeScreen;
