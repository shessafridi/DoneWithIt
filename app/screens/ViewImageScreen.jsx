import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImage(props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.closeButton}>
        <MaterialCommunityIcons color='#fff' size={20} name='close' />
      </View>
      <View style={styles.deleteButton}>
        <MaterialCommunityIcons
          color='#fff'
          size={20}
          name='trash-can-outline'
        />
      </View>

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
    top: 40,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ViewImage;
