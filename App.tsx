import React from 'react'
import { SafeAreaView } from 'react-native'
import { LoginScreen } from './src/screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import { HomeNavigator } from './src/navigator/Navigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ProfileScreen } from './src/screens/ProfileScreen'
import Icon from 'react-native-vector-icons/Ionicons'

const App = () => {

  const Tab = createBottomTabNavigator()

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              return <Icon name={"md-copy"} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          }
        )}
        >
          <Tab.Screen name='Home' component={HomeNavigator}/>
          <Tab.Screen name='Settings' component={ProfileScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App