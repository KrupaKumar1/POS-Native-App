// Navigation.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderDashboard from '../screens/OrderDashboard';
import LoginPage from '../screens/LoginPage';
import OtpPage from '../screens/OtpPage';
import MenuItems from '../screens/MenuItems';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen
        name="LoginPage"
        options={{
          headerShown: false,
        }}
        component={LoginPage}
      />
      <Stack.Screen
        name="OtpPage"
        options={{
          headerShown: false,
        }}
        component={OtpPage}
      />
      <Stack.Screen
        name="OrderDashboard"
        options={{
          headerShown: false,
        }}
        component={OrderDashboard}
      />
      <Stack.Screen
        name="MenuItems"
        options={{
          headerShown: false,
        }}
        component={MenuItems}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
