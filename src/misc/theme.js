const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const FONT_FAMILY = 'IBM Plex Sans';

export const theme = {
  colors: {
    main: '#24292e',
    secondary: '#f26b00',
    background: '#fff',
    backgroundSecondary: 'f7f7f7',
  },
  fontFamily: FONT_FAMILY,
  typography: {
    fontSize: '13px',
    lineHeight: '19px',
  },
  breakpoints: {
    ...BREAKPOINTS,
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    main: 'hsla(0,0%,100%,.6)',
    secondary: 'white',
    background: '#20232a',
    backgroundSecondary: '',
  },
};
