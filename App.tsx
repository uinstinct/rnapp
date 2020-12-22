import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomButton from "./components/CustomButton";

export default function App() {
  const handlePress = () => {
    console.log("mobile is always changing");
  };

  const imgSrc = "https://picsum.photos/400/400";

  const CustomTouchFeedback = () => (
    <View>
      <Text style={styles.text}>Tap on the image below to see it change</Text>
      <TouchableOpacity>
        <Image source={{ uri: imgSrc, height: 400, width: 400 }} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This should be able to start the project on phone
      </Text>
      {/* add the height and the width to the source objcect and not as props */}
      <Image source={{ uri: imgSrc, height: 200, width: 200 }} />
      <StatusBar style="auto" />
      <CustomButton />
      <CustomTouchFeedback />
    </View>
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
