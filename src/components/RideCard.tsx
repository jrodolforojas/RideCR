import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FadeInImage } from './FadeInImage'
import { CommonActions } from '@react-navigation/native'

export const RideCard = () => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate('RideInfoScreen', {}))}>
        <View style={styles.cardContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <FadeInImage uri={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'} style={styles.profileImage}/>
                <View style={{ flexDirection: 'column', marginLeft: 10, marginTop: 5 }}>
                    <Text style={styles.profileNameText}>Rick Sanchez</Text>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.locationText}>San Carlos</Text>
                        <Text style={styles.locationText}>San Pedro</Text>
                        <Text>10:00 AM</Text>
                        <Text>3 campos</Text>
                    </View>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'white',
    height: 140,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11
  },
  profileNameText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000'
  },
  locationText: {
    fontWeight: 'bold',
    marginRight: 5
  },
  profileImage: {
    width: 100,
    height: 120,
    margin: 10
  }
})
