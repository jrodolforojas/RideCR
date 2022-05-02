import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/HomeScreen'
import { CreateRideScreen } from '../screens/CreateRideScreen'

const Stack = createNativeStackNavigator()

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreateRideScreen" component={CreateRideScreen} />
    </Stack.Navigator>
  )
}
