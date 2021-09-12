import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

function ImageInputList({ images, onPress }) {
  return (
    <>
      {images.map((img, i) => (
        <TouchableWithoutFeedback key={i} onPress={() => onPress(img)}>
          <Image
            style={styles.imageCard}
            resizeMode='cover'
            source={{ uri: img }}
          />
        </TouchableWithoutFeedback>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  imageCard: {
    margin: 5,
    height: 100,
    width: 100,
    borderRadius: 15,
  },
});

export default ImageInputList;
