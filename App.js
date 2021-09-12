import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

import Screen from './app/components/Screen';
import Permissions from 'expo-permissions';
import { Button, Image } from 'react-native';
import ImageInput from './app/components/ImageInput';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  return <ListingEditScreen />;
}
