import React from "react";
import { Button, Alert, Text } from "react-native";
import { useImageSize } from "../contexts/ImageSize";

export default function CustomAlert() {
  const { enlarge, shrink } = useImageSize();
  return (
    <>
      <Button
        title="native alert"
        onPress={() => {
          alert("this is an alert");
        }}
      />
      <Text>Alert.prompt is only available on IOS</Text>
      <Button
        title="react native alert"
        onPress={() => {
          Alert.alert("HEADING", "body of the alert box", [
            { text: "make image larger", onPress: enlarge },
            { text: "make image smaller", onPress: shrink },
            {
              text: "check console",
              onPress: () => console.info("logged in the console as an info"),
            },
          ]);
        }}
      />
    </>
  );
}
