import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';
import AppText from './AppText';

function ListItem({
  title = '',
  subTitle = '',
  onPress = () => {},
  image,
  IconComponent,
  renderRightActions,
}) {
  return (
    <Swipeable
      useNativeAnimations={true}
      enabled={!!renderRightActions}
      overshootFriction={8}
      overshootRight={false}
      overshootLeft={false}
      renderRightActions={renderRightActions}
    >
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && (
            <Image resizeMode='cover' style={styles.image} source={image} />
          )}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    color: colors.medium,
    fontSize: 16,
  },
});

export default ListItem;
