const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const FONT_FAMILY = 'IBM Plex Sans';

export const MAIN_ORANGE = '#f26b00';

export const theme = {
  colors: {
    main: '#24292e',
    secondary: MAIN_ORANGE,
    background: '#fff',
    backgroundSecondary: '#f7f7f7',
    orange: MAIN_ORANGE,
  },
  fontFamily: FONT_FAMILY,
  typography: {
    fontSize: '13px',
    lineHeight: '19px',
  },
  breakpoints: {
    ...BREAKPOINTS,
  },
  transition: '.2s ease',
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    main: '#f2f2f2',
    secondary: 'white',
    background: '#20232a',
  },
};
