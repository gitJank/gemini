import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import NavBarContainer from '../components/NavBarContainer/NavBarContainer';
import RolesView from '../components/RolesView/RolesView';
import theme from './App.theme';

const useStyles = makeStyles({
  content: {
    margin: '32px'
  }
});

export default () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavBarContainer />
        <div className={classes.content}>
          <RolesView />
        </div>
      </ThemeProvider>
    </Provider>
  );
};
