//stylesheet é estilização 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Switch, ScrollView, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: '#009246', flex: 1 }]}/>
      <View style={[styles.box, { backgroundColor: '#ffffff', flex: 1 }]}/>
      <View style={[styles.box, { backgroundColor: '#ce2b37', flex: 1 }]}/>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6c4ac',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  box: {
    height: 250
  },
});
