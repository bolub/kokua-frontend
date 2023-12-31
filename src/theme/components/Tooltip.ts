import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// define the base component styles
const baseStyle = {
  borderRadius: "lg", // add a border radius
  p: "10px",
  bgColor: "white",
  color: "gray.700",
  fontWeight: 500,
  borderWidth: "1px",
  boxShadow: "sm",
  fontSize: "xs",
};

// export the component theme
export const tooltipTheme = defineStyleConfig({ baseStyle });
