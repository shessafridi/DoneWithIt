import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({
  icon,
  items,
  placeholder,
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
  selectedItem,
  onSelectItem,
  onBlur,
  width = '100%',
}) {
  const [modalvisible, setModalvisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onBlur={onBlur}
        onPress={() => setModalvisible(true)}
      >
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem?.label}</AppText>
          ) : (
            <AppText style={[styles.text, styles.placeholder]}>
              {placeholder}
            </AppText>
          )}

          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal hardwareAccelerated visible={modalvisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setModalvisible(false)} />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  onSelectItem(item);
                  setModalvisible(false);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
  },
});

export default AppPicker;
