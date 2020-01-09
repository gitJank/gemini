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
  Button,
  Paper,
  Checkbox,
  Fade
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    marginLeft: '32px',
    width: 650,
    height: 800
  },
  tableRow: {
    cursor: 'pointer'
  }
});

const ScopesSelectionView = ({ show, scopes, assignedScopes }) => {
  const classes = useStyles();
  const assignedScopesSnapshot = [...assignedScopes];
  const [selectedScopes, setSelectedScopes] = useState([]);

  useEffect(() => {
    setSelectedScopes([...assignedScopes]);
  }, [assignedScopes]);

  const isEqual = (snapshot, current) =>
    snapshot.length === current.length &&
    snapshot.sort().every((val, i) => val === current.sort()[i]);

  const isItemSelected = (array, id) => !!array.find(item => item === id);

  const handleCheck = scopeId =>
    isItemSelected(selectedScopes, scopeId)
      ? setSelectedScopes(prev => prev.filter(item => item !== scopeId))
      : setSelectedScopes(prev => [...prev, scopeId]);

  return (
    <Fade in={show} mountOnEnter unmountOnExit>
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label="roles table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Select Scopes</TableCell>
              <TableCell align="right">
                <Button
                  disabled={isEqual(assignedScopesSnapshot, selectedScopes)}
                  color="primary"
                >
                  Save Changes
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scopes.map(scope => (
              <TableRow
                hover
                className={classes.tableRow}
                onClick={() => handleCheck(scope.id)}
                role="checkbox"
                aria-checked={isItemSelected(selectedScopes, scope.id)}
                selected={isItemSelected(selectedScopes, scope.id)}
                key={scope.id}
                data-testid={`tr-test-${scope.id}`}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={isItemSelected(selectedScopes, scope.id)}
                    data-testid={`checkbox-test-${scope.id}`}
                    inputProps={{
                      'aria-labelledby': `scope-name-${scope.id}`,
                      'data-testid': `scope-checkbox-${scope.id}`
                    }}
                  />
                </TableCell>
                <TableCell
                  component="th"
                  id={`scope-name-${scope.id}`}
                  scope="row"
                >
                  {scope.name}
                </TableCell>
                <TableCell />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fade>
  );
};

ScopesSelectionView.propTypes = {
  show: PropTypes.bool.isRequired,
  scopes: PropTypes.array.isRequired,
  assignedScopes: PropTypes.array.isRequired
};

export default ScopesSelectionView;
