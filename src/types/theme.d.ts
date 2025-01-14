import type { Theme as ThemeMui } from '@mui/material/styles';

type Colors = {
  base: string;
  lightness1?: string;
  lightness2?: string;
  lightness3?: string;
  lightness4?: string;
  lightness5?: string;
  darkness1?: string;
  darkness2?: string;
  darkness3?: string;
  darkness4?: string;
  darkness5?: string;
};

export declare type ThemeColors = {
  primary: Colors;
  secondary: Colors;
  tertiary: Colors;
  danger: Colors;
  gray: Colors;
  blue: Colors;
  yellow: Colors;
  green: Colors;
  white: Colors;
  pink: Colors;
  black: Colors;
  purple: Colors;
  red: Colors;
  lime: Colors;
  orange: Colors;
  graphite: Colors;
};

declare module '@mui/material/styles' {
  interface Theme extends ThemeMui {
    colors: ThemeColors;
  }
}
