import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { TabNavigator } from './src/navigator/TabNavigator'
import { SignUpNavigator } from './src/navigator/SignUpNavigator'

const App = () => {
  const authenticated = true

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {authenticated ? <TabNavigator/> : <SignUpNavigator/>}
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
