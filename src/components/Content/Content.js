import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import RolesContainer from '../RolesContainer/RolesContainer';
import ScopesContainer from '../ScopesContainer/ScopesContainer';
import ScopesSelectionContainer from '../ScopesSelectionContainer/ScopesSelectionContainer';
import CreateAppModal from '../CreateAppModal/CreateAppModal';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '32px'
  }
});

const Content = ({ selectedRole }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <RolesContainer />
        {!selectedRole ? <ScopesContainer /> : <ScopesSelectionContainer />}
      </div>
      <CreateAppModal />
    </>
  );
};

Content.propTypes = {
  selectedRole: PropTypes.string
};

Content.defaultProps = {
  selectedRole: null
};

const mapStateToProps = state => ({
  selectedRole: state.role.selectedRole
});

export default connect(mapStateToProps)(Content);
