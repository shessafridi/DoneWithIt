import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableHighlight onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons name='trash-can' size={35} color={colors.white} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
});

export default ListItemDeleteAction;
