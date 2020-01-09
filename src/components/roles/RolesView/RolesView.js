import React, { useState } from 'react';
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
  },
  tableRow: {
    cursor: 'pointer'
  }
});

const RolesView = ({
  roles,
  selectedApp,
  selectedRole,
  handleSelectRole,
  handleCreateRole
}) => {
  const classes = useStyles();

  const [showAddRole, setShowAddRole] = useState(false);
  const [roleName, setRoleName] = useState('');

  const saveRoleClicked = () => {
    if (roleName) {
      handleCreateRole(roleName, selectedApp);
      setRoleName('');
    }
  };

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="roles table">
        <TableHead>
          <TableRow>
            <TableCell>Roles</TableCell>
            <TableCell align="right">
              {showAddRole ? (
                <IconButton
                  data-testid="cancel-btn"
                  onClick={() => setShowAddRole(false)}
                  aria-label="cancel"
                >
                  <Close />
                </IconButton>
              ) : (
                <IconButton
                  data-testid="add-btn"
                  onClick={() => setShowAddRole(true)}
                  aria-label="add"
                >
                  <Add />
                </IconButton>
              )}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map(role => (
            <TableRow
              hover
              selected={selectedRole === role.id}
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
            <AddItemTableRow
              inputValue={roleName}
              setInputValue={setRoleName}
              saveChanges={saveRoleClicked}
              handleClose={() => setShowAddRole(false)}
            />
          ) : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

RolesView.propTypes = {
  roles: PropTypes.array.isRequired,
  selectedApp: PropTypes.string.isRequired,
  selectedRole: PropTypes.string,
  handleSelectRole: PropTypes.func.isRequired,
  handleCreateRole: PropTypes.func.isRequired
};

RolesView.defaultProps = {
  selectedRole: null
};

export default RolesView;
