import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';
import colors from '../config/colors';
import AppText from './AppText';

function AppButton({ title, color = 'primary', onPress = () => {} }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.button,
        {
          backgroundColor: colors[color],
        },
      ]}
      onPress={onPress}
    >
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '100%',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    elevation: 3,
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default AppButton;
