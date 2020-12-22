import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const handlePress = ()=>{
    console.log('mobile is always changing');
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>This should be able to start the project on phone</Text>
      <Text>Check if refreshing works</Text>
      <Text numberOfLines={1} onPress={handlePress}>
        This is a very long text. This will show ellipsis when out of the area because number of lines set is 1
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});