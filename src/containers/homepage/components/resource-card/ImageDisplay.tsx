import { Center, Image as ChakraImage, Text } from "@chakra-ui/react";
import { usePreviewImage } from "./usePreviewImage";
import { useState } from "react";

const generateRandomColor = () => {
  // Generate random background color
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  // Calculate brightness of the background color
  const hexColor = randomColor.substring(1); // remove the '#' at the beginning
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Determine text color based on brightness
  const textColor = brightness > 128 ? "black" : "white";

  return {
    background: randomColor,
    text: textColor,
  };
};

export const ImageDisplay = ({ url, alt }: { url: string; alt: string }) => {
  const previewImage = usePreviewImage({ url });

  const { background, text } = generateRandomColor();
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {!hasError && previewImage ? (
        <ChakraImage
          src={previewImage}
          w="full"
          h="200px"
          objectFit="cover"
          alt={alt}
          rounded="xl"
          onError={(e) => {
            setHasError(true);
            e.currentTarget.src = "/Placeholder.png";
          }}
        />
      ) : (
        <Center
          w="full"
          h="200px"
          rounded="xl"
          p="20px"
          textAlign="center"
          borderWidth="1px"
          bgColor={background}
          color={text}
        >
          <Text fontWeight="bold">{alt}</Text>
        </Center>
      )}
    </>
  );
};
