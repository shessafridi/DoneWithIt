import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const platformStyles = Platform.select({
  android: {
    fontFamily: 'Roboto',
  },
  ios: {
    fontFamily: 'Avenir',
  },
  web: {
    fontFamily: 'Segoe UI',
  },
});

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    ...platformStyles,
  },
});

export default AppText;
