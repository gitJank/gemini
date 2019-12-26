/* eslint-disable comma-dangle */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import {
  getApplications,
  setSelectedApp,
  openCreateApplication
} from '../../Redux/Application/actions';
import { clearSelectedRole, clearRoles } from '../../Redux/Role/actions';
import { clearScopes } from '../../Redux/Scope/actions';

const NavBarContainer = ({
  handleGetApplications,
  handleSetSelectedApp,
  handleOpenCreateApplication
}) => {
  useEffect(() => {
    handleGetApplications();
  }, [handleGetApplications]);

  return (
    <NavBar
      setSelectedApp={handleSetSelectedApp}
      handleOpenCreateApplication={handleOpenCreateApplication}
    />
  );
};

NavBarContainer.propTypes = {
  handleGetApplications: PropTypes.func.isRequired,
  handleSetSelectedApp: PropTypes.func.isRequired,
  handleOpenCreateApplication: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleGetApplications: () => {
    dispatch(getApplications());
  },
  handleSetSelectedApp: id => {
    dispatch(clearSelectedRole());
    dispatch(setSelectedApp(id));
  },
  handleOpenCreateApplication: () => {
    dispatch(clearScopes());
    dispatch(clearRoles());
    dispatch(openCreateApplication());
  }
});

export default connect(null, mapDispatchToProps)(NavBarContainer);
