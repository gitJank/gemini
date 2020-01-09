import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Add from '@material-ui/icons/Add';
import {
  AppBar,
  Toolbar,
  FormControl,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';
import { withAuth } from '../../../auth';

const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundColor: theme.palette.secondary.main,
    justifyContent: 'space-between'
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
  auth,
  applications,
  selectedApp,
  setSelectedApp,
  handleOpenCreateApplication
}) => {
  const classes = useStyles();
  const ADD_APP = 'add_app';

  return (
    applications && (
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              className={classes.select}
              labelId="app-select"
              id="app-select"
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
          <Button
            color="primary"
            variant="contained"
            onClick={() => auth.logout()}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    )
  );
};

export default withAuth(NavBar);
