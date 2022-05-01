import React from 'react'
import { Text, View } from 'react-native'
import { CreateRideScreen } from './src/screens/CreateRideScreen'
import { HomeScreen } from './src/screens/HomeScreen'
import { LoginScreen } from './src/screens/LoginScreen'
import { RideInfoScreen } from './src/screens/RideInfoScreen'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F7F9F9" }}>
      <CreateRideScreen />
    </View>
  );
}

export default App
