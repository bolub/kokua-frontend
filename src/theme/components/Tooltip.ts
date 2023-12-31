import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  borderRadius: "lg",
  p: "10px",
  bgColor: "white",
  color: "gray.700",
  fontWeight: 500,
  borderWidth: "1px",
  boxShadow: "sm",
  fontSize: "xs",
};

export const tooltipTheme = defineStyleConfig({ baseStyle });
