import React from 'react';
import PropTypes from 'prop-types';
import {
  TableRow,
  TableCell,
  TextField,
  Tooltip,
  IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Close from '@material-ui/icons/Close';
import Check from '@material-ui/icons/Check';

const useStyles = makeStyles({
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

const AddItemTableRow = ({
  inputValue,
  setInputValue,
  saveChanges,
  handleClose
}) => {
  const classes = useStyles();
  return (
    <TableRow className={classes.tableRow}>
      <TableCell className={classes.tableCellDense} component="th" scope="row">
        <TextField
          data-testid="name-input"
          className={classes.textfield}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          label="Name"
          variant="outlined"
          margin="dense"
        />
      </TableCell>
      <TableCell align="right" className={classes.tableCellDense}>
        <Tooltip title="Save" aria-label="save" placement="top">
          <span>
            <IconButton
              data-testid="save-changes-btn"
              disabled={!inputValue}
              onClick={() => saveChanges()}
            >
              <Check />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Cancel" aria-label="cancel" placement="top">
          <IconButton data-testid="close-btn" onClick={() => handleClose()}>
            <Close />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

AddItemTableRow.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  saveChanges: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default AddItemTableRow;
