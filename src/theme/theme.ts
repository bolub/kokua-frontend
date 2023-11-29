/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

import { fonts, fontSizes } from "./foundations/fonts";
import { styles } from "./styles";
import { colors } from "./foundations/colors";
import { containerTheme } from "./components/Container";
import { tagTheme } from "./components/Tag";

export const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  styles,
  components: {
    Container: containerTheme,
    Tag: tagTheme,
  },
});
