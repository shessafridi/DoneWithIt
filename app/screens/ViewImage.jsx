import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import colors from '../config/colors';

function ViewImage(props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.closeButton}></View>
      <View style={styles.deleteButton}></View>
      <Image
        style={styles.image}
        resizeMode='contain'
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  closeButton: {
    width: 50,
    height: 50,
    position: 'absolute',
    backgroundColor: colors.primary,
    top: 40,
    left: 30,
  },
  deleteButton: {
    width: 50,
    height: 50,
    position: 'absolute',
    backgroundColor: colors.secondary,
    top: 40,
    right: 30,
  },
});
export default ViewImage;
