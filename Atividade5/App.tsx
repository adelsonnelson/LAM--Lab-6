import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');

  const limparTexto = () => {
    setTexto('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite algo:</Text>

      <TextInput
        style={styles.input}
        placeholder="Escreva aqui..."
        value={texto}
        onChangeText={setTexto}
        keyboardType="default" 
      />

      <Text style={styles.textoDigitado}>
        {texto}
      </Text>

      <View style={styles.botao}>
        <Button title="Limpar" onPress={limparTexto} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    borderRadius: 8,
  },
  textoDigitado: {
    fontSize: 16,
    marginBottom: 20,
  },
  botao: {
    width: 100,
    alignSelf: 'center',
  },
});
