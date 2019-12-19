import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from '@material-ui/core';
import { getRoles } from '../../Redux/Role/actions';

const useStyles = makeStyles({
  table: {
    width: 650
  }
});

const RolesView = ({ roles, handleGetRoles, selectedApp }) => {
  const classes = useStyles();

  useEffect(() => {
    if (selectedApp) handleGetRoles(selectedApp);
  }, [handleGetRoles, selectedApp]);

  return (
    roles && (
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label="roles table">
          <TableHead>
            <TableRow>
              <TableCell>Roles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map(role => (
              <TableRow key={role.name}>
                <TableCell component="th" scope="row">
                  {role.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

RolesView.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.shape())
};

RolesView.defaultProps = {
  roles: null
};

const mapStateToProps = state => ({
  roles: state.role.roles,
  selectedApp: state.application.selectedApp
});

const mapDispatchToProps = dispatch => ({
  handleGetRoles: selectedApp => {
    dispatch(getRoles(selectedApp));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RolesView);
