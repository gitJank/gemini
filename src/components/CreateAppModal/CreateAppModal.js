import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Fade, Backdrop, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  closeCreateApplication,
  createApplication
} from '../../Redux/Application/actions';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.default,
    border: `2px solid ${theme.palette.secondary.dark}`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    '& h2': {
      color: '#fff'
    },
    '&:focus': {
      outline: 'none',
      border: `2px solid ${theme.palette.primary.dark}`
    }
  },

  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    margin: '16px 0px',
    width: '400px'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

const CreateAppModal = ({
  open,
  handleCloseCreateApplication,
  handleCreateApplication
}) => {
  const classes = useStyles();
  const [appName, setAppName] = useState('');
  const [appId, setAppId] = useState('');

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={() => {}}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Create Application</h2>
          <ValidatorForm
            className={classes.form}
            onSubmit={() => handleCreateApplication(appId, appName)}
            onError={errors => console.log(errors)}
          >
            <TextValidator
              className={classes.input}
              label="Application Name"
              onChange={e => setAppName(e.target.value)}
              name="email"
              variant="outlined"
              value={appName}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <TextValidator
              className={classes.input}
              label="Application Id"
              onChange={e => setAppId(e.target.value)}
              name="email"
              variant="outlined"
              value={appId}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <div className={classes.buttonGroup}>
              <Button onClick={handleCloseCreateApplication}>Cancel</Button>
              <Button type="submit" color="primary" variant="contained">
                Submit
              </Button>
            </div>
          </ValidatorForm>
        </div>
      </Fade>
    </Modal>
  );
};

CreateAppModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCloseCreateApplication: PropTypes.func.isRequired,
  handleCreateApplication: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  open: state.application.isCreateApplicationOpen
});

const mapDispatchToProps = dispatch => ({
  handleCloseCreateApplication: () => {
    dispatch(closeCreateApplication());
  },
  handleCreateApplication: (appId, appName) => {
    dispatch(createApplication(appId, appName));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAppModal);
