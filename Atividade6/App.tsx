import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  const itens = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);
  const localImage = require('./assets/platao.png'); // Substitua pela sua imagem local

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista com ScrollView</Text>

      <ScrollView style={styles.scrollArea}>
        {itens.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={localImage} style={styles.image} />
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  scrollArea: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  itemText: {
    fontSize: 16,
    marginLeft: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
});
