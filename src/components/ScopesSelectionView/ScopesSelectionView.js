import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Checkbox
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

const ScopesSelectionView = ({ scopes, assignedScopes }) => {
  const classes = useStyles();
  const [selectedScopes, setSelectedScopes] = useState([]);

  useEffect(() => {
    setSelectedScopes([...assignedScopes]);
  }, [assignedScopes]);

  const isItemSelected = scopeId =>
    !!selectedScopes.find(item => item === scopeId);

  const handleCheck = scopeId => {
    const isSelected = isItemSelected(scopeId);
    if (isSelected) {
      setSelectedScopes(prev => prev.filter(item => item !== scopeId));
    } else {
      setSelectedScopes(prev => [...prev, scopeId]);
    }
  };

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="roles table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Select Scopes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scopes.map(scope => (
            <TableRow
              hover
              className={classes.tableRow}
              onClick={() => handleCheck(scope.id)}
              role="checkbox"
              aria-checked={isItemSelected(scope.id)}
              selected={isItemSelected(scope.id)}
              key={scope.id}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isItemSelected(scope.id)}
                  inputProps={{ 'aria-labelledby': `scope-name-${scope.id}` }}
                />
              </TableCell>
              <TableCell
                component="th"
                id={`scope-name-${scope.id}`}
                scope="row"
              >
                {scope.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

ScopesSelectionView.propTypes = {
  scopes: PropTypes.array.isRequired,
  assignedScopes: PropTypes.array.isRequired
};

export default ScopesSelectionView;
