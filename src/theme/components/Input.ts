import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const search = definePartsStyle({
  field: {
    _focus: {
      shadow: "none",
      outline: "none",
      borderColor: "gray.500",
    },
    rounded: "xl",
    pl: "50px",
    pr: "32px",
    fontWeight: "semibold",
    fontSize: "sm",
    height: "50px",
    borderWidth: "1.4px",
    borderColor: "gray.300",
  },
});

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {},
});

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  variants: { search },
});
