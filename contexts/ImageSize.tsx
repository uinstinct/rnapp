import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IImageSize {
  imgSize: number;
  setImgSize: Dispatch<SetStateAction<number>>;
}

const ImageSizeContext = createContext<IImageSize>({
  imgSize: 200,
  setImgSize: () => {},
});

export const ImageSizeProvider = ({ children }: { children: ReactNode }) => {
  const [imgSize, setImgSize] = useState(200);
  return (
    <ImageSizeContext.Provider value={{ imgSize, setImgSize }}>
      {children}
    </ImageSizeContext.Provider>
  );
};

export const useImageSize = () => {
  const { imgSize, setImgSize } = useContext(ImageSizeContext);
  const enlarge = () => {
    setImgSize((prev) => prev + 100);
  };
  const shrink = () => {
    setImgSize((prev) => prev - 100);
  };
  return {
    imgSize,
    enlarge,
    shrink,
  };
};
