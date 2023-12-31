/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

import { fonts, fontSizes } from "./foundations/fonts";
import { styles } from "./styles";
import { colors } from "./foundations/colors";
import { containerTheme } from "./components/Container";
import { tagTheme } from "./components/Tag";
import { inputTheme } from "./components/Input";
import { tooltipTheme } from "./components/Tooltip";

export const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  styles,
  components: {
    Container: containerTheme,
    Tag: tagTheme,
    Input: inputTheme,
    Tooltip: tooltipTheme,
  },
});
