import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    borderRadius: "full",
    fontSize: "13px",
    fontWeight: "bold",
    textTransform: "capitalize",
    transition: "all .3s",
    _hover: {
      bgColor: "brand.900",
      color: "white",
    },
  },
});

export const tagTheme = defineMultiStyleConfig({ baseStyle });
