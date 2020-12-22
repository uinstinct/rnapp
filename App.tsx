import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const handlePress = ()=>{
    console.log('mobile is always changing');
  }

  const imgSrc = "https://reactnative.dev/img/tiny_logo.png";
  const imgSrc2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==";
  
  return (
    <View style={styles.container}>
      <Text 
        style={styles.text}
      >
        This should be able to start the project on phone
      </Text>
      <Image source={{uri:imgSrc2}} height={200} width={200}/>
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
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'green'
  }
});