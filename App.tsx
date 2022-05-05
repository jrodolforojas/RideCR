import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { LoginScreen } from './src/screens/LoginScreen'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginScreen/>
    </SafeAreaView>
  )
}

export default App