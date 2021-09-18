import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListingsScreen from './../screens/ListingsScreen';
import ListingDetailsScreen from './../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator();

function FeedNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name='Listings' component={ListingsScreen} />
      <Stack.Screen
        options={{ headerShown: false }}
        name='ListingDetails'
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
