//stylesheet é estilização 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Switch, ScrollView, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  const alertar = () => {
    if (!text || !email || !age) {
      Alert.alert("Erro");
      return;
    }
    Alert.alert("Dados cadastrados", `Nome: ${text}\nEmail: ${email}\nIdade: ${age}`); //Precisa de crase ao invés de aspas para poder formatar
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
        
    {isEnabled && (
      <View style={styles.imageContainer}>
        <Image source={require('./assets/platao.png')} style={styles.plataoimage} />
      </View>
    )}

      <View style={styles.inputContainer}>
        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Bruno..."
          value={text}
          onChangeText={setText}
        />

        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="abc@gmail.com..."
          value={email}
          onChangeText={setEmail}
        />

        <Text>Idade</Text>
        <TextInput
          style={styles.input}
          placeholder="X anos..."
          value={age}
          onChangeText={setAge}
        />

        <Text>Observações</Text>
        <TextInput
          multiline={true}
          placeholder="Faça observações..."
          style={styles.input}
        />
          <Button title="Cadastrar" onPress={alertar} color="black"/>
      </View>

      <View style={styles.imageContainer}>
        <Switch
          trackColor={{false: 'black', true: 'black'}}
          thumbColor={isEnabled ? 'white' : 'white'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        /> 
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '75%',
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  plataoimage: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
});
