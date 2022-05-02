import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SECONDARY, WHITE_COLOR } from '../../utils/constants/colors'

interface Props {
  title: string
}

export const Button = ({ title }: Props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 170,
    height: 50,
    borderRadius: 100,
    marginTop: 10,
    backgroundColor: SECONDARY,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: WHITE_COLOR,
    paddingHorizontal: 10
  }
})
