import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Add from '@material-ui/icons/Add';
import Close from '@material-ui/icons/Close';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton
} from '@material-ui/core';

import AddItemTableRow from '../../common/AddItemTableRow/AddItemTableRow';

const useStyles = makeStyles({
  table: {
    width: 650,
    height: 800
  }
});

const ScopesView = ({ scopes, selectedApp, handleCreateScope }) => {
  const classes = useStyles();
  const endRow = useRef(null);

  const [showAddScope, setShowAddScope] = useState(false);
  const [scopeName, setScopeName] = useState('');

  const scrollToBottom = () =>
    setTimeout(() => {
      console.log(endRow);
      endRow.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 200);

  const saveScopeClicked = () => {
    if (scopeName) {
      handleCreateScope(scopeName, selectedApp);
      setScopeName('');
    }
  };

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="scopes table">
        <TableHead>
          <TableRow>
            <TableCell>Scopes</TableCell>
            <TableCell align="right">
              {showAddScope ? (
                <IconButton
                  data-testid="cancel-btn"
                  onClick={() => setShowAddScope(false)}
                  aria-label="cancel"
                >
                  <Close />
                </IconButton>
              ) : (
                <IconButton
                  data-testid="add-btn"
                  onClick={() => {
                    setShowAddScope(true);
                    scrollToBottom();
                  }}
                  aria-label="add"
                >
                  <Add />
                </IconButton>
              )}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scopes.map(scope => (
            <TableRow key={scope.id}>
              <TableCell component="th" scope="row">
                {scope.name}
              </TableCell>
              <TableCell />
            </TableRow>
          ))}
          {showAddScope ? (
            <AddItemTableRow
              inputValue={scopeName}
              setInputValue={setScopeName}
              saveChanges={saveScopeClicked}
              handleClose={() => setShowAddScope(false)}
            />
          ) : null}
          <TableRow ref={endRow} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

ScopesView.propTypes = {
  scopes: PropTypes.array.isRequired,
  selectedApp: PropTypes.string.isRequired,
  handleCreateScope: PropTypes.func.isRequired
};

export default ScopesView;
