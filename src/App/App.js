import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import auth, { AuthContext } from '../auth';
import store, { persistor } from '../Redux/store';
import NavBarContainer from '../components/common/NavBarContainer/NavBarContainer';
import Content from '../components/common/Content/Content';
import CreateAppModal from '../components/applications/CreateAppModal/CreateAppModal';
import theme from './App.theme';

export default () => (
  <AuthContext.Provider value={auth}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <NavBarContainer />
            <Content />
            <CreateAppModal />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </AuthContext.Provider>
);
