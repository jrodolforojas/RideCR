import React from 'react'
import { Text, View } from 'react-native'
import { HomeScreen } from './src/screens/HomeScreen'
import { RideInfoScreen } from './src/screens/RideInfoScreen'

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HomeScreen/>
    </View>
  )
}

export default App
