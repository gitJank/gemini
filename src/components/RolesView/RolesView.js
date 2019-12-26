import React, { useState } from 'react';
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

const RolesView = ({ roles, handleSelectRole }) => {
  const classes = useStyles();

  const [showAddRole, setShowAddRole] = useState(false);

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="roles table">
        <TableHead>
          <TableRow>
            <TableCell>Roles</TableCell>
            <TableCell align="right">
              <IconButton aria-label="add">
                <Add onClick={() => setShowAddRole(true)} />
              </IconButton>
            </TableCell>
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
              <TableCell />
            </TableRow>
          ))}
          {showAddRole ? (
            <TableRow className={classes.tableRow}>
              <TableCell
                className={classes.tableCellDense}
                component="th"
                scope="row"
              >
                <TextField
                  className={classes.textfield}
                  label="Name"
                  variant="outlined"
                  margin="dense"
                />
              </TableCell>
              <TableCell align="right" className={classes.tableCellDense}>
                <Tooltip title="Save" aria-label="save" placement="top">
                  <IconButton>
                    <Check />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Cancel" aria-label="cancel" placement="top">
                  <IconButton>
                    <Close onClick={() => setShowAddRole(false)} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ) : null}
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
