import React from 'react';
import { StyleSheet, View } from 'react-native';

import Login from './components/Login';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
