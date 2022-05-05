import React from 'react'
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native'
import { BLACK_COLOR, WHITE_COLOR } from '../utils/constants/colors'

interface Props {
  title: string
  keyboardType?: KeyboardTypeOptions
  securityEntry ?: boolean
}

export const TextInputWithTitle = ({ title, keyboardType = 'default', securityEntry = false }: Props) => {
  return (
    <View>
      <Text style={styles.textInputTitle}>{title}</Text>
      <TextInput
          style={styles.inputContainer}
          keyboardType={keyboardType}
          autoCapitalize={'none'}
          autoCorrect={false}
          secureTextEntry={securityEntry}
          />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    height: 50,
    marginVertical: 10,
    backgroundColor: WHITE_COLOR,
    color: BLACK_COLOR,
    borderRadius: 10,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInputTitle: {
    fontSize: 15,
    color: BLACK_COLOR
  }
})
