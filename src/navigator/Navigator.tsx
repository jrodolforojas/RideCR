import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { CreateRideScreen } from '../screens/CreateRideScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { RideInfoScreen } from '../screens/RideInfoScreen';

const Stack = createStackNavigator();

export const HomeNavigator = () =>{
  return (
    <Stack.Navigator 
    screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RideInfoScreen" component={RideInfoScreen} />
      <Stack.Screen name="CreateRideScreen" component={CreateRideScreen} />
    </Stack.Navigator>
  );
}