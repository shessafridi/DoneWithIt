import React from 'react';
import { StyleSheet, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImage from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Card from './app/components/Card';
import colors from './app/config/colors';

export default function App() {
  return (
    // <View
    //   style={{
    //     padding: 20,
    //     height: '100%',
    //     backgroundColor: colors.background,
    //   }}
    // >
    //   <Card
    //     title='Testing my card'
    //     subTitle='100$'
    //     image={require('./app/assets/jacket.jpg')}
    //   />
    //   <Card
    //     title='Luxary Couch For Sale!'
    //     subTitle='900$'
    //     image={require('./app/assets/couch.jpg')}
    //   />
    // </View>

    // <WelcomeScreen />
    <ListingDetailsScreen />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
