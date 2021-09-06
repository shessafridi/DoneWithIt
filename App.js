import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImage from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Card from './app/components/Card';
import colors from './app/config/colors';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

const categories = [
  {
    label: 'Furniture',
    value: 1,
  },
  {
    label: 'Clothing',
    value: 2,
  },
  {
    label: 'Cameras',
    value: 3,
  },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        items={categories}
        selectedItem={category}
        onSelectItem={category => setCategory(category)}
        icon='apps'
        placeholder='Category'
      />
      <AppTextInput icon='email' />
    </Screen>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
