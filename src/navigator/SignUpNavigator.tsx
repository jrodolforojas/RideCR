import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignUpStackParams } from '../types/StackParams'
import { CompleteInfoScreen, LoginScreen, PhoneVerificationScreen } from '../screens'

const Stack = createStackNavigator<SignUpStackParams>()

export const SignUpNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='CompleteInfoScreen' component={CompleteInfoScreen} />
      <Stack.Screen name='PhoneVerificationScreen' component={PhoneVerificationScreen} />
    </Stack.Navigator>
  )
}
