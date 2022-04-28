import React from 'react'
import { Text, View } from 'react-native'
import { HomeScreen } from './src/screens/HomeScreen'
import { LoginScreen } from './src/screens/LoginScreen'
import { RideInfoScreen } from './src/screens/RideInfoScreen'

const App = () => {
  return (
    <View style={{flex:1, backgroundColor: 'white'}}>
      <LoginScreen/>
    </View>
  )
}

export default App
