import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';

function ListItemSeperator(props) {
  return <View style={styles.sperator} />;
}

const styles = StyleSheet.create({
  sperator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.light,
  },
});

export default ListItemSeperator;
