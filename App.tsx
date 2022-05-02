import React from 'react'
import { View } from 'react-native'
import { LoginScreen } from './src/screens/LoginScreen'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#F7F9F9' }}>
      <LoginScreen />
    </View>
  )
}

export default App
