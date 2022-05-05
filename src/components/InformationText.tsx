import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  title: string
  value: string
}

export const InformationText = ({ title, value }: Props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, marginRight: 5, color: '#000' }}>{title}:</Text>
        <Text style={styles.text}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    width: 100,
    marginBottom: 2,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
