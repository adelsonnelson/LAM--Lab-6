import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const localImage = require('./assets/platao.png');
  const webImage = {url: 'https://filosofia.arcos.org.br/content/images/2021/07/Plato-raphael-1.jpg',};
  return (
    <View style={styles.container}>
      <Image
        source={isEnabled ? webImage : localImage}
        style={styles.plataoimage}
        resizeMode="contain"
      />
      <StatusBar style="auto" />

      <Switch
          value={isEnabled}
          onValueChange={setIsEnabled}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plataoimage: {
    height: 300,
    width: 300,
  }
});
