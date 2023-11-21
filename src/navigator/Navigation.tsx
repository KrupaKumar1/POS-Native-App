// Navigation.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderDashboard from '../screens/OrderDashboard';
import LoginPage from '../screens/LoginPage';
import OtpPage from '../screens/OtpPage';

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
          headerShown: true,
        }}
        component={OtpPage}
      />
      <Stack.Screen
        name="OrderDashboard"
        options={{
          headerShown: true,
        }}
        component={OrderDashboard}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
