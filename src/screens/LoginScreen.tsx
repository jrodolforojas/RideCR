import React from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
        <KeyboardAvoidingView 
          style={styles.textInputsContainer}
          behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>

            <Text style={styles.textInputTitle}>Email</Text>
            <TextInput
              style={styles.inputContainer}
              keyboardType="email-address"
              autoCapitalize={"none"}
              autoCorrect={false}
              />

            <Text style={styles.textInputTitle}>Password</Text>
            <TextInput 
              style={styles.inputContainer} 
              secureTextEntry={true}/>

            {/* Login Button */}
            <View style={{alignSelf: 'center'}}>
              <TouchableOpacity style={styles.button}>
                <Text style={{fontSize: 20, fontWeight: 'bold',color: '#F7F9F9', paddingHorizontal: 10}}>Login</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={{alignSelf: 'flex-start', marginTop: 10}}>
              <Text>Don't have account?Create an account</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
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
    height: 50,
    marginVertical: 10,
    backgroundColor: '#F7F9F9',
    color: '#051923',
    borderRadius: 10,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInputsContainer: {
    flex: 1,
    marginVertical: 30,
  },
  textInputTitle: {
    fontSize: 15,
    color: '#051923'
  },
  button: {
    width: 170, 
    height: 50,
    borderRadius: 100,
    marginTop: 10,
    backgroundColor: '#DD6E42',
    alignItems: 'center',
    justifyContent: 'center'
  }
})