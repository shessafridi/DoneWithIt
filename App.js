import React from 'react';
import { StyleSheet, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImage from './app/screens/ViewImage';

export default function App() {
  return <ViewImage />;
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
