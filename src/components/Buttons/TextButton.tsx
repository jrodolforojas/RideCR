import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
  textTitle: string
}

export const TextButton = ({ textTitle }:Props) => {
  return (
    <TouchableOpacity>
      <Text style={styles.textTitle}>{textTitle}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 15
  }
})
