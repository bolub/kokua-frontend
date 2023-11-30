import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


const sizes = {
  md: defineStyle({
    maxW: '1240px',
    px: '20px',
  }),
}

const defaultProps: any = {
  size: 'md'
}


export const containerTheme = defineStyleConfig({
  sizes,
  defaultProps,
});
