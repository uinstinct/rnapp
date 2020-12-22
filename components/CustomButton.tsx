import React from "react";
import { Button } from "react-native";

export default function CustomButton() {
  return (
    <>
      <Button
        title="custom button"
        onPress={() => console.log("button was pressed")}
        color="lightblue"
      />
    </>
  );
}
