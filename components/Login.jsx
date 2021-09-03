import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  Platform,
  NativeModules,
} from 'react-native';

const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? 20 : NativeModules.StatusBarManager?.HEIGHT;

export default function Login() {
  return (
    <>
      <Image
        source={require('../assets/background.jpg')}
        resizeMode='cover'
        style={{ height: '100%', width: '100%', position: 'absolute' }}
      />

      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={styles.logo}
            resizeMode='contain'
            source={require('../assets/logo-red.png')}
          />
          <Text>Sell what you don't need</Text>
        </View>

        <View>
          <View
            style={{ width: '100%', height: 60, backgroundColor: 'tomato' }}
          ></View>
          <View
            style={{ width: '100%', height: 60, backgroundColor: 'cyan' }}
          ></View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: STATUSBAR_HEIGHT + 40,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  logo: { width: 100, height: 100, marginBottom: 10 },
});
