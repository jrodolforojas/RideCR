import React from 'react'
import { View } from 'react-native'
import { CreateRideScreen } from './src/screens/CreateRideScreen'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#F7F9F9' }}>
      <CreateRideScreen />
    </View>
  )
}

export default App
