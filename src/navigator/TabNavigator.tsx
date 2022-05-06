import React from 'react'
import { HomeNavigator } from './HomeNavigator'
import { ProfileNavigator } from './ProfileNavigator'
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { PRIMARY } from '../utils/constants/colors'

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: PRIMARY }}>
      <Tab.Screen
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (<Icon color={ color } size={ 25 } name="car-outline"/>)
        }}
      />
      <Tab.Screen
      name='Profile'
      component={ProfileNavigator}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (<Icon color={ color } size={ 25 } name="person-outline"/>)
      }}
      />
    </Tab.Navigator>
  )
}
