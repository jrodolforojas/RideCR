import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CreateRideScreen } from '../screens/CreateRideScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { RideInfoScreen } from '../screens/RideInfoScreen'
import { HomeStackParams } from '../types/StackParams'

const Stack = createStackNavigator<HomeStackParams>()

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RideInfoScreen" component={RideInfoScreen} />
      <Stack.Screen name="CreateRideScreen" component={CreateRideScreen} />
    </Stack.Navigator>
  )
}
