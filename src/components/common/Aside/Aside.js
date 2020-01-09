import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 212,
    height: 'calc(100vh - 72px)',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.secondary
  }
}));

const Aside = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="roles scopes">
        <ListItem button component={Link} to="/">
          <ListItemText primary="Roles" />
        </ListItem>
        <ListItem button component={Link} to="/scopes">
          <ListItemText primary="Scopes" />
        </ListItem>
      </List>
    </div>
  );
};

export default Aside;
