import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {

  const [numPushups, setNumPushups] = useState(0)
  const [currentDate, setCurrentDate] = useState("")

  const AddTenPushups = () => {
    setNumPushups(numPushups + 10)
  }

  const AddFivePushups = () => {
    setNumPushups(numPushups + 5)
  }

  const resetPushups = () => {
    setNumPushups(0)
  }

  const FormatAndReturnDate = () => {
    let timestamp = Date.now()
    let date = new Date(timestamp)
    setCurrentDate(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`)
  }

  useEffect(() => {
    FormatAndReturnDate()
  }, [])


  return (
    <View style={styles.container}>

      <Text style={styles.date}>{currentDate}</Text>
      <View style={styles.pushupsContainer}>
        <Text style={styles.number}>{numPushups}</Text>
      </View>

      <View style={styles.addPushups}>
        <Text style={styles.addPushupsText}>Add Pushups For Today</Text>
        <Button onPress={resetPushups} color="#2196f3" title="Reset" />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={AddFivePushups}>
          <Text style={styles.buttonText} >5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={AddTenPushups}>
          <Text style={styles.buttonText}>10</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  pushupsContainer: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  addPushups: {
    alignItems: 'center',
    justifyContent: 'center',
    height: "5%",
  },
  addPushupsText: {
    fontSize: 30
  },
  button: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#2196f3',
    color: 'white'
  },
  buttonText: {
    fontSize: 50
  },
  container: {
    marginTop: '10%',
    display: 'flex',
    height: '100%',
  },
  date: {
    marginTop: 0,
    marginLeft: 10,
    fontSize: 55,
    fontWeight: 'bold'
  },
  number: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#03a9f4'
  }
});
