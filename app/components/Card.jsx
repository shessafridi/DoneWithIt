import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import React from 'react';
import colors from '../config/colors';
import AppText from './AppText';

function Card({ title = '', subTitle = '', image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {image && (
          <Image resizeMode='cover' style={styles.image} source={image} />
        )}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,

    // Shadows
    elevation: 1,
    shadowColor: 'gray',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    height: 200,
    width: '100%',
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
  },
  subTitle: {
    color: colors.secondary,
    marginTop: 4,
    fontWeight: 'bold',
  },
});

export default Card;
