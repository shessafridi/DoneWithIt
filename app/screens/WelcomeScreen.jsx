import React from 'react';
import { StyleSheet, Image, Text, View, ImageBackground } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from './../components/AppText';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode='contain'
          source={require('../assets/logo-red.png')}
        />
        <AppText style={styles.tagline}>Sell What You Don't Need</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title='Login' />
        <AppButton color='secondary' title='Register' />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 50,
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tagline: {
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
