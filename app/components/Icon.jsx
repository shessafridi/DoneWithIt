import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import colors from '../config/colors';

function Icon({
  name,
  size = 40,
  backgroundColor = '#000',
  iconColor = '#fff',
}) {
  return (
    <View
      style={{
        height: size,
        width: size,
        backgroundColor,
        borderRadius: size / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MaterialCommunityIcons size={size * 0.5} color={iconColor} name={name} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Icon;
