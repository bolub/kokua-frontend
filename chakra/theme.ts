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
        p: {
          mb: '0px'
        },

        pre: {
          padding: '0px',
          backgroundColor: 'unset',
          pos: 'relative',
        },

        'h2::first': {
          mt: 0
        },
        a: {
          color: 'brand.500',
        },
        '.right': {
          textAlign: 'right',
          display: 'flex',
          width: '100%',
          justifyContent: 'end',
          fontSize: 'sm'
        },
        h2: {
          mt: 0
        }
      }
    }
  ),
);
