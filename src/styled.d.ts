import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      s: string;
      m: string;
      l: string;
    },
    color: {
      text: {
        primary: string;
        secondary: string;
        action: string;
      },
      bg: {
        primary: string;
        secondary: string;
        action: string;
      }
    },
    fontFamily: string;
    fontSize: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
    },
    fontWeight: {
      normal: string|number;
      action: string|number;
      bold: string|number;
    },
    lineHeight: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
    },
    borderRad: {
      medium: string;
      small: string;
    }
  };
};
