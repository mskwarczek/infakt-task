import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  breakpoints: {
    s: '700px',
    m: '1040px',
    l: '1400px',
  },
  color: {
    text: {
      primary: '#000000',
      secondary: '#54585C',
      action: '#1E88E5',
    },
    bg: {
      primary: '#FFFFFF',
      secondary: '#E4E6E8',
      action: '#E3F2FD',
    }
  },
  fontFamily: 'Roboto, sans-serif',
  fontSize: {
    xsmall: '12px',
    small: '14px',
    medium: '16px',
    large: '24px',
  },
  fontWeight: {
    normal: 400,
    action: 500,
    bold: 700,
  },
  lineHeight: {
    xsmall: '16px',
    small: '20px',
    medium: '24px',
    large: '32px',
  },
  borderRad: {
    medium: '16px',
    small: '8px',
  },
};

export default theme;
