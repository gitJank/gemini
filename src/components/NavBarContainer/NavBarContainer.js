/* eslint-disable comma-dangle */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import {
  getApplications,
  setSelectedApp
} from '../../Redux/Application/actions';

const NavBarContainer = ({ handleGetApplications, handleSetSelectedApp }) => {
  useEffect(() => {
    handleGetApplications();
  }, [handleGetApplications]);

  return <NavBar setSelectedApp={handleSetSelectedApp} />;
};

NavBarContainer.propTypes = {
  handleGetApplications: PropTypes.func.isRequired,
  handleSetSelectedApp: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleGetApplications: () => {
    dispatch(getApplications());
  },
  handleSetSelectedApp: id => {
    dispatch(setSelectedApp(id));
  }
});

export default connect(null, mapDispatchToProps)(NavBarContainer);
