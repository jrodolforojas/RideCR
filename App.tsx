import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { HomeNavigator } from './src/navigator/Navigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ProfileScreen } from './src/screens/ProfileScreen'

const App = () => {
  const Tab = createBottomTabNavigator()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeNavigator}/>
          <Tab.Screen name='Settings' component={ProfileScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
