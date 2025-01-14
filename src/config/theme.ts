import { createTheme, ThemeOptions } from '@mui/material';
import { ThemeColors } from '../types/theme';

export const COLOR_BASE = '#008DFF';

export const colors: ThemeColors = {
  primary: {
    base: COLOR_BASE,
    lightness1: '#07162F',
  },
  secondary: {
    base: '#fff',
  },
  tertiary: {
    base: '#07162F',
    lightness1: '#002A4C',
    lightness2: '#042D4A',
    lightness3: '#002A4C',
    lightness4: '#1C3154',
    darkness1: '#1F2D43',
    darkness2: '#2C394E',
    darkness3: '#07162F1A',
    darkness4: '#07162F66',
    darkness5: '#07162F80',
  },
  danger: {
    base: '#fff',
  },
  gray: {
    base: '#838A97',
    lightness1: '#B4B9C0',
    lightness2: '#E6E7EA',
    lightness3: '#D8D8D8',
    lightness4: '#E0E0E0',
    lightness5: '#F2F3F4',
    darkness1: '#8c8c8c',
    darkness2: '#FFFFFF80',
    darkness3: '#E1E7EC',
    darkness4: '#697280',
    darkness5: '#544E4E',
  },
  blue: {
    base: '#5D5FEF',
    lightness1: '#80C6FF',
    lightness2: '#3C5A99',
    lightness3: '#1DA1F2',
    lightness4: '#C2E0FF',
    lightness5: '#F0F7FF',
    darkness1: '#003A75',
  },
  yellow: {
    base: '#B0955F',
    lightness1: '#B0955F',
  },
  green: {
    base: '#41AB6D',
    lightness1: '#27AE60',
    lightness2: '#D2F7E2',
  },
  white: {
    base: '#FFFFFF',
    lightness1: '#d9d9d9',
    lightness2: '#edf1f4',
    lightness4: '#AEB7C7',
    lightness5: '#F8F8FA',
    darkness1: '#DDDDDD',
    darkness2: '#ffffff4d',
    darkness3: '#FFFFFF80',
    darkness4: '#FFFFFF40',
  },
  black: {
    base: '#000000',
    lightness1: '#1F1F1F',
  },
  pink: {
    base: '#fff',
  },
  purple: {
    base: '#7571FF',
    lightness1: '#735CE9',
    lightness2: '#5A46B6',
    darkness1: '#3D31E7',
  },
  red: {
    base: '#F84646',
    lightness1: '#FE493A',
    lightness2: '#F85A46',
    lightness3: '#FFEDEC',
  },
  lime: {
    base: '#9FF818',
    lightness1: '#7ED321',
    lightness2: '#D3FF0080',
  },
  orange: {
    base: '#f17330',
  },
  graphite: {
    base: '#9C9DAF',
    lightness1: '#D4DBE4',
  },
};

export const themeOptions: ThemeOptions = {
  typography: {
    allVariants: {
      color: colors.white.base,
      fontFamily: 'Aeonik',
    },
    h1: {
      fontSize: 32,
      lineHeight: '40px',
    },
    h2: {
      fontSize: 28,
      lineHeight: '34px',
    },
    h3: {
      fontSize: 24,
      lineHeight: '28px',
    },
    h4: {
      fontSize: 22,
      lineHeight: '26px',
    },
    h5: {
      fontSize: 20,
      lineHeight: '24px',
    },
    h6: {
      fontSize: 18,
      lineHeight: '22px',
    },
    body1: {
      fontSize: 16,
      lineHeight: '20.8px',
    },
    body2: {
      fontSize: 12,
      lineHeight: '16px',
    },
    caption: {
      fontSize: 10,
      lineHeight: '12px',
    },
    button: {
      fontSize: 16,
      lineHeight: '20px',
    },
  },
};

export const theme = createTheme(
  {
    ...themeOptions,
  },
  {
    colors,
  },
);
