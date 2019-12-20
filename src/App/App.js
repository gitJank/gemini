import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import NavBarContainer from '../components/NavBarContainer/NavBarContainer';
import Content from '../components/Content/Content';
import theme from './App.theme';

export default () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <NavBarContainer />
      <Content />
    </ThemeProvider>
  </Provider>
);
