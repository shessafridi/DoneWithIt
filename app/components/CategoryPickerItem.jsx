import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableWithoutFeedback style={{ width: '33%' }} onPress={onPress}>
      <View style={styles.container}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    textAlign: 'center',
    marginTop: 5,
  },
});

export default CategoryPickerItem;
