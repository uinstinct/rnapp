import React from "react";
import { Image } from "react-native";
import { useImageSize } from "../contexts/ImageSize";

const imgSrc = "https://picsum.photos/400/400";

export default function CustomImage() {
  /* 
    hooks cannot be called in the same component as the provider
    
    this will have no effect on the state variables and instead default variables of the context will be used

    updating the state will work once the compnent,which requires state, is inside the provider
    */
  const { imgSize } = useImageSize();
  return <Image source={{ uri: imgSrc, height: imgSize, width: imgSize }} />;
}
