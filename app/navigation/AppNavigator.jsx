import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListingEditScreen from './../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ headerShown: false }}
        name='Feed'
        component={FeedNavigator}
      />
      <Tab.Screen name='ListingEdit' component={ListingEditScreen} />
      <Tab.Screen
        options={{ headerShown: false }}
        name='AccountNavigator'
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
