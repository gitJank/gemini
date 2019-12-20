import React from 'react';
import PropTypes from 'prop-types';
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

const useStyles = makeStyles({
  table: {
    width: 650,
    height: 800,
    margin: '0px 64px'
  },
  tableRow: {
    cursor: 'pointer'
  }
});

const RolesView = ({ roles, handleSelectRole }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="roles table">
        <TableHead>
          <TableRow>
            <TableCell>Roles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map(role => (
            <TableRow
              hover
              className={classes.tableRow}
              onClick={() => handleSelectRole(role.id)}
              key={role.id}
            >
              <TableCell component="th" scope="row">
                {role.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

RolesView.propTypes = {
  roles: PropTypes.array.isRequired,
  handleSelectRole: PropTypes.func.isRequired
};

export default RolesView;
