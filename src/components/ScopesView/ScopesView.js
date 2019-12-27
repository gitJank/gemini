import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Add from '@material-ui/icons/Add';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
  TextField,
  Tooltip
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    width: 650,
    height: 800,
    margin: '0px 64px'
  },
  tableCellDense: {
    padding: '8px 16px'
  },
  tableRow: {
    cursor: 'pointer'
  },
  textfield: {
    '& input': { color: '#000' },
    '& label': { color: '#000' }
  }
});

const ScopesView = ({ scopes, selectedApp, handleCreateScope }) => {
  const classes = useStyles();
  const endRow = useRef(null);

  const [showAddScope, setShowAddScope] = useState(false);
  const [scopeName, setScopeName] = useState('');

  const scrollToBottom = () => {
    setTimeout(() => {
      endRow.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 200);
  };

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
              <IconButton
                onClick={() => setShowAddScope(true)}
                aria-label="add"
              >
                <Add />
              </IconButton>
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
            <TableRow onLoad={scrollToBottom()} className={classes.tableRow}>
              <TableCell
                className={classes.tableCellDense}
                component="th"
                scope="row"
              >
                <TextField
                  className={classes.textfield}
                  value={scopeName}
                  onChange={e => setScopeName(e.target.value)}
                  label="Name"
                  variant="outlined"
                  margin="dense"
                />
              </TableCell>
              <TableCell align="right" className={classes.tableCellDense}>
                <Tooltip title="Save" aria-label="save" placement="top">
                  <IconButton onClick={() => saveScopeClicked()}>
                    <Check />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Cancel" aria-label="cancel" placement="top">
                  <IconButton onClick={() => setShowAddScope(false)}>
                    <Close />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
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
