import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountScreen from './../screens/AccountScreen';
import MessagesScreen from './../screens/MessagesScreen';
import routes from './routes';

const Stack = createNativeStackNavigator();

function AccountNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
      <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
  );
}

export default AccountNavigator;
