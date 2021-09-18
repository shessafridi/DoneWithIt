import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            {!!subTitle && (
              <AppText numberOfLines={2} style={styles.subTitle}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            name='chevron-right'
            size={25}
          />
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
    alignItems: 'center',
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
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
