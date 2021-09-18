import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

import Screen from './app/components/Screen';
import Permissions from 'expo-permissions';
import { Button, Image } from 'react-native';
import ImageInput from './app/components/ImageInput';
import ListingEditScreen from './app/screens/ListingEditScreen';
import AppText from './app/components/AppText';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './app/config/colors';
import ListingsScreen from './app/screens/ListingsScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const FeedStack = props => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
      initialRoute='Listings'
    >
      <Stack.Screen name='Listings' component={ListingsScreen} />
      <Stack.Screen name='ListingDetails' component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.medium,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Tab.Screen
        name='Feed'
        component={FeedStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons color={color} size={25} name='home' />
          ),
        }}
      />
      <Tab.Screen
        name='Add'
        component={ListingEditScreen}
        options={{
          tabBarLabelStyle: {
            opacity: 0,
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              size={25}
              name='plus-circle'
            />
          ),
        }}
      />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons color={color} size={25} name='account' />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
