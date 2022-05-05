import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SECONDARY, WHITE_COLOR } from '../utils/constants/colors'
import Icon from 'react-native-vector-icons/Ionicons'

export const Logo = () => {
  return (
    <View>
      <View style={styles.logoContainer}>
        <Icon name='car' size={150} color={WHITE_COLOR} />
      </View>
      <Text style={styles.logoText}>RideCR</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10
  },
  logoText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: WHITE_COLOR
  }
})
