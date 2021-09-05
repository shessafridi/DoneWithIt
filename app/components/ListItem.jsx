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
  renderRightActions,
}) {
  return (
    <Swipeable
      overshootFriction={8}
      overshootRight={false}
      overshootLeft={false}
      renderRightActions={renderRightActions}
    >
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <Image resizeMode='cover' style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
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
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
