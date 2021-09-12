import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import { ScrollView } from 'react-native-gesture-handler';
import ImageInputList from './ImageInputList';

function ImageInput({ images, onImageSelect, onDelete, onBlur }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert('You need to enable permissions to access this library.');
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        onImageSelect(result.uri);
      }
    } catch (e) {
      console.log(e, 'Error reading the image');
    }

    onBlur();
  };

  return (
    <ScrollView
      snapToStart
      snapToEnd
      horizontal
      contentContainerStyle={{ paddingHorizontal: 5 }}
      style={styles.container}
    >
      <ImageInputList onPress={image => onDelete(image)} images={images} />
      <TouchableWithoutFeedback onPress={selectImage}>
        <View style={[styles.imageCard, styles.button]}>
          <MaterialCommunityIcons
            name='camera'
            color={colors.medium}
            size={35}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light,
  },
  imageCard: {
    margin: 5,
    height: 100,
    width: 100,
    borderRadius: 15,
  },
});

export default ImageInput;
