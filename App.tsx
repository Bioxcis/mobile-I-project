import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import OperationScreen from './src/components/form/FormObj';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <OperationScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default App;
