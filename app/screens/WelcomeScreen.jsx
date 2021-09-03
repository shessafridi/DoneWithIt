import React from 'react';
import { StyleSheet, Image, Text, View, ImageBackground } from 'react-native';

import colors from '../config/colors';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode='contain'
          source={require('../assets/logo-red.png')}
        />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 50,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: colors.primary,
    height: 70,
    width: '100%',
  },
  registerButton: {
    backgroundColor: colors.secondary,
    height: 70,
    width: '100%',
  },
});

export default WelcomeScreen;
