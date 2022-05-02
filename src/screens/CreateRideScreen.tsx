import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DateTimePicker, {
  DateTimePickerEvent
} from '@react-native-community/datetimepicker'

export const CreateRideScreen = () => {
  const [myTime, setMyTime] = useState(new Date())
  const [show, setShow] = useState(false)

  const handleTime = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    const currentDate = selectedDate || myTime
    setMyTime(currentDate)
    setShow(false)
  }

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.titleText}>Create Ride</Text>

      <View style={styles.inputsContainer}>
        {/* Origin picker */}
        <Text>Origin</Text>
        <Picker style={styles.pickerContainer}>
          <Picker.Item label="San Carlos" value="San Carlos" />
          <Picker.Item label="San Pedro" value="San Pedro" />
        </Picker>
        {/* Destination picker */}
        <Text>Destination</Text>
        <Picker style={styles.pickerContainer}>
          <Picker.Item label="San Carlos" value="San Carlos" />
          <Picker.Item label="San Pedro" value="San Pedro" />
        </Picker>

        {/* Time picker */}
        <Text>Time</Text>
        <Text
          style={{ fontSize: 30, color: '#051923' }}
          onPress={() => setShow(true)}
        >
          {myTime
            .toLocaleTimeString()
            .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3')}
        </Text>
        {show && (
          <DateTimePicker
            value={myTime}
            mode="time"
            display="clock"
            onTouchCancel={() => setShow(false)}
            onChange={handleTime}
            is24Hour={false}
          />
        )}
        {/* Save button */}
        <View style={{ alignSelf: 'center' }}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#F7F9F9',
                paddingHorizontal: 10
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#127475',
    alignSelf: 'center'
  },
  inputsContainer: {
    flex: 1
  },
  pickerContainer: {
    height: 50,
    backgroundColor: '#F7F9F9',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#127475'
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
