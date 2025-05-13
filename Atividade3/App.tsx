import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.bold}>Aprendendo </Text>
        <Text style={styles.italico}>React </Text>
        <Text style={styles.largeFont}>Native</Text>
      </Text>
      <StatusBar style="auto" />
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
  bold: {
    fontWeight: 'bold',
  },
  italico: {
    fontStyle: 'italic',
    color: 'blue',
  },
  largeFont: {
    fontSize: 24,
  },
});