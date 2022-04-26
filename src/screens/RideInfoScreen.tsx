import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'

export const RideInfoScreen = () => {
  // TODO: Adjust them using flex properties
  return (
    <View style={styles.container}>
      <FadeInImage uri={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"} style={styles.profileImage}/>
      <Text style={styles.profileNameText}>Rick Sanchez</Text>

      <View style={{marginTop: 50}}>
        {/* TODO: Convert it to a component */}
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 20, marginRight: 5, color: '#000'}}>Origen:</Text>
          <Text style={styles.text}>San Carlos</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 20, marginRight: 5, color: '#000'}}>Destino:</Text>
          <Text style={styles.text}>San Pedro</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 20, marginRight: 5, color: '#000'}}>Hora:</Text>
          <Text style={styles.text}>10:00 AM</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 20, marginRight: 5, color: '#000'}}>Campo:</Text>
          <Text style={styles.text}>2</Text>
        </View>

      </View>

      <View style={{marginTop: 100}}>
        <TouchableOpacity style={{backgroundColor: 'green', width: 300, height: 50, borderRadius: 5, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white'}}>Contactar</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImage: {
    padding: 30,
    width: 300,
    height: 300
  },
  profileNameText: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold'
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  }
})
