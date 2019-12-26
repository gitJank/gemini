import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const colors = {
  darkCyan: {
    light: '#31c0ba',
    main: '#29a19c',
    dark: '#21827e',
    contrastText: '#fff'
  },
  darkGrey: {
    light: '#323b48',
    main: '#222831',
    dark: '#12151a',
    contrastText: '#fff'
  },
  black: '#000',
  white: '#fff'
};

export default createMuiTheme({
  palette: {
    type: 'light',
    primary: { ...colors.darkCyan },
    secondary: { ...colors.darkGrey },
    text: {
      primary: colors.black,
      secondary: colors.white
    },
    background: {
      default: colors.darkGrey.light
    }
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        color: colors.white
      }
    },
    MuiButton: {
      root: {
        color: colors.white
      }
    }
  }
});
