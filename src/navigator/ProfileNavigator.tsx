import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ProfileStackParams } from '../types/StackParams'
import { ProfileScreen } from '../screens'

const Stack = createStackNavigator<ProfileStackParams>()

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
    </Stack.Navigator>
  )
}
