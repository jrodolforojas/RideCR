import React from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import { TERTIARY } from '../utils/constants/colors'
import { Logo } from '../components/Logo'
import { TextInputWithTitle } from '../components/TextInputWithTitle'
import { Button, TextButton } from '../components/Buttons'

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Logo/>

      <KeyboardAvoidingView
        style={styles.textInputsContainer}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>

          <TextInputWithTitle title='Email' keyboardType='email-address'/>
          <TextInputWithTitle title='Password' securityEntry={true}/>

          <View style={{ alignSelf: 'center' }}>
            <Button title='Login'/>
          </View>

          <View style={{ alignSelf: 'flex-start', marginTop: 10 }}>
            <TextButton textTitle={"Don't have account? Sign up"}/>
          </View>

      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TERTIARY,
    alignItems: 'center'
  },
  textInputsContainer: {
    flex: 1,
    marginVertical: 30
  }
})
