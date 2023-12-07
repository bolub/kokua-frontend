import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const variantSearch = definePartsStyle({
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
  field: {
    rounded: "xl",
    px: "3",
    fontSize: "sm",
  },
});

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  variants: { search: variantSearch },
});
