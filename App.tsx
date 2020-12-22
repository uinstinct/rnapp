import { useDeviceOrientation } from "@react-native-community/hooks";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CustomAlert from "./components/CustomAlert";
import CustomButton from "./components/CustomButton";
import CustomImage from "./components/CustomImage";
import { ImageSizeProvider } from "./contexts/ImageSize";

const View1 = () => (
  <>
    <Text style={styles.text}>
      This should be able to start the project on phone
    </Text>
    {/* add the height and the width to the source objcect and not as props */}
    <CustomImage />
    <CustomAlert />
    <CustomButton />
  </>
);

const View2 = () => {
  const { landscape, portrait } = useDeviceOrientation();
  return (
    <>
      <View style={styles.container2}>
        <Text>view is like a div</Text>
        <Text>occupies 50% of both height and width</Text>
        <Text>You are in {landscape ? "landscape" : "portrait"} mode</Text>
      </View>
    </>
  );
};

export default function App() {
  return (
    <>
      <ImageSizeProvider>
        <View style={styles.container}>
          {/* <View1 /> */}
          <View2 />
        </View>
      </ImageSizeProvider>
      <StatusBar style="auto" />
    </>
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
  container2: {
    backgroundColor: "#abc",
    height: "50%",
    width: "50%",
  },
});
