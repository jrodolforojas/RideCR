import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
        {/* Logo */}
        <View>
          <View style={styles.logoContainer}>
            <FontAwesome name="car" size={100} color="#F7F9F9" />
          </View>
          <Text style={styles.logoText}>RideCR</Text>
        </View>

        {/* Text inputs */}
        <View style={styles.textInputsContainer}>
          <TextInput placeholder="email" style={styles.inputContainer}/>
          <TextInput placeholder="password" style={styles.inputContainer} secureTextEntry={true}/>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={{fontSize: 25, fontWeight: 'bold',color: '#F7F9F9'}}>Login</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E9594',
    alignItems: 'center'
  },
  logoContainer : {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#DD6E42',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10
  },
  logoText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#F7F9F9'
  },
  inputContainer: {
    width: 300,
    height: 60,
    marginVertical: 10,
    backgroundColor: '#F7F9F9',
    color: '#127475',
    borderRadius: 10,
    padding: 20,
    fontSize: 15,
  },
  textInputsContainer: {
    flex: 1,
    marginVertical: 50,
  },
  button: {
    width: 200, 
    height: 50,
    borderRadius: 10,
    backgroundColor: '#DD6E42',
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
})