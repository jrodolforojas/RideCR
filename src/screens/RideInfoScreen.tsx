import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'
import { InformationText } from '../components/InformationText'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const RideInfoScreen = () => {
  return (
    <View style={styles.container}>
      <FadeInImage uri={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'} style={styles.profileImage}/>

      <View style={{ flex: 1 }}>
        <Text style={styles.profileNameText}>Rick Sanchez</Text>

        <InformationText title="Origen" value="San Carlos"/>
        <InformationText title="Destino" value="San Pedro"/>
        <InformationText title="Hora" value="10:00 AM"/>
        <InformationText title="Campos" value="2"/>
      </View>

      {/* TODO: Install icon dependencies for IOS */}
      <TouchableOpacity style={{ margin: 20, backgroundColor: '#43AA8B', alignSelf: 'stretch', borderRadius: 10 }}>
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
          <FontAwesome name="whatsapp" style={{ marginRight: 10 }} size={30} color="white" />
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', padding: 10 }}>Contactar</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  profileImage: {
    width: 300,
    height: 300,
    borderRadius: 5,
    marginVertical: 20
  },
  profileNameText: {
    color: '#000',
    width: 200,
    height: 50,
    fontSize: 30,
    fontWeight: 'bold'
  },
  text: {
    width: 100,
    height: 50,
    fontSize: 30,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'green',
    width: '100%',
    height: 100,
    borderRadius: 5
  }
})
