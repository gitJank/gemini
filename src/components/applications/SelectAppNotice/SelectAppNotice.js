import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    height: '160px',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.secondary
  }
}));

export const SelectAppNoticeBase = ({ show }) => {
  const classes = useStyles();

  return (
    show && (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <h1>Please Select an Application</h1>
        </Paper>
      </div>
    )
  );
};

SelectAppNoticeBase.propTypes = {
  show: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  show: !state.application.selectedApp
});

export default connect(mapStateToProps)(SelectAppNoticeBase);
