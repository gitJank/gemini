import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../Redux/store';
import NavBarContainer from '../components/NavBarContainer/NavBarContainer';
import Content from '../components/Content/Content';
import theme from './App.theme';

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <NavBarContainer />
        <Content />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
