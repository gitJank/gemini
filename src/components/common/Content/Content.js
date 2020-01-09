import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Route } from 'react-router-dom';
import Aside from '../Aside/Aside';
import RolesContainer from '../../roles/RolesContainer/RolesContainer';
import ScopesContainer from '../../scopes/ScopesContainer/ScopesContainer';
import SelectAppNotice from '../../applications/SelectAppNotice/SelectAppNotice';

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  content: {
    display: 'flex',
    width: '100%',
    margin: '32px'
  }
});

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Aside />
      <div className={classes.content}>
        <Route exact path="/" component={RolesContainer} />
        <Route path="/scopes" component={ScopesContainer} />
        <SelectAppNotice />
      </div>
    </div>
  );
};
