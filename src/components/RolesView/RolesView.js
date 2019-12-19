import React from 'react';
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
    width: 650
  }
});

export default () => {
  const classes = useStyles();

  const roles = [
    { name: 'Role 1' },
    { name: 'Role 2' },
    { name: 'Role 3' },
    { name: 'Role 4' },
    { name: 'Role 5' }
  ];

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
            <TableRow key={role.name}>
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
