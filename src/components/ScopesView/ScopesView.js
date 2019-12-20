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
  }
});

const ScopesView = ({ scopes }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="scopes table">
        <TableHead>
          <TableRow>
            <TableCell>Scopes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scopes.map(scope => (
            <TableRow key={scope.id}>
              <TableCell component="th" scope="row">
                {scope.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

ScopesView.propTypes = {
  scopes: PropTypes.array.isRequired
};

export default ScopesView;
