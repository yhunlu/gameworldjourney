import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#F7EAFA',
      100: '#E7C5F2',
      200: '#D89FE9',
      300: '#C97AE1',
      400: '#B955D8',
      500: '#AA2FD0',
      600: '#8826A6',
      700: '#661C7D',
      800: '#441353',
      900: '#22092A',
    },
    gray: {
      50: '#f9f9f9',
      100: '#ededed',
      200: '#d3d3d3',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#6c6c6c',
      700: '#202020',
      800: '#121212',
      900: '#111',
    },
  },
});

export default theme;
