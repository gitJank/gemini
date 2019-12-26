/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Add from '@material-ui/icons/Add';
import {
  AppBar,
  Toolbar,
  FormControl,
  Select,
  MenuItem
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.secondary.main
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  select: { color: theme.palette.primary.contrastText },
  selectMenu: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText
  },
  notchedOutline: {
    borderColor: theme.palette.primary.main
  }
}));

const NavBar = ({
  applications,
  selectedApp,
  setSelectedApp,
  handleOpenCreateApplication
}) => {
  const classes = useStyles();
  const ADD_APP = 'add_app';
  return (
    applications && (
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              className={classes.select}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={selectedApp}
              displayEmpty
              onChange={e =>
                e.target.value === ADD_APP
                  ? handleOpenCreateApplication()
                  : setSelectedApp(e.target.value)
              }
              MenuProps={{
                classes: { paper: classes.selectMenu }
              }}
            >
              <MenuItem value="" disabled>
                Select Application
              </MenuItem>
              {applications.map(app => (
                <MenuItem key={app.id} value={app.id}>
                  {app.name}
                </MenuItem>
              ))}
              <MenuItem value={ADD_APP}>
                <Add />
                Create Application
              </MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    )
  );
};

NavBar.propTypes = {
  applications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  selectedApp: PropTypes.string.isRequired,
  setSelectedApp: PropTypes.func.isRequired,
  handleOpenCreateApplication: PropTypes.func.isRequired
};

NavBar.defaultProps = {
  applications: null
};

const mapStateToProps = state => ({
  applications: state.application.applications,
  selectedApp: state.application.selectedApp
});

export default connect(mapStateToProps)(NavBar);
