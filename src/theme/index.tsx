import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.700',
        color: 'gray.800',
      },
    },
  },
  fonts: {
    body: 'Raleway, sans-serif',
  },
})

export default theme
