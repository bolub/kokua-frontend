import { extendTheme } from '@chakra-ui/react';
import { containerTheme } from './components/Container';
import colors from './foundations/colors';
import { fonts, fontSizes } from './foundations/fonts';
import styles from './styles';
import { withProse } from '@nikolovlazar/chakra-ui-prose'

export const theme = extendTheme({
  colors, fonts, fontSizes, styles,
  components: {
    Container: containerTheme,
  },
},
  withProse(
    {
      baseStyle: {
        pre: {
          padding: '0px',
          backgroundColor: 'unset'
        }
      }
    }
  ),
);
