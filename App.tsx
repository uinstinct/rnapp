import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CustomAlert from "./components/CustomAlert";
import CustomButton from "./components/CustomButton";
import CustomImage from "./components/CustomImage";
import { ImageSizeProvider } from "./contexts/ImageSize";

export default function App() {
  return (
    <ImageSizeProvider>
      <View style={styles.container}>
        <Text style={styles.text}>
          This should be able to start the project on phone
        </Text>
        {/* add the height and the width to the source objcect and not as props */}
        <CustomImage />
        <StatusBar style="auto" />
        <CustomButton />
      </View>
      <CustomAlert />
    </ImageSizeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    color: "green",
  },
});
