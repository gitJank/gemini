import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import {
  getApplications,
  setSelectedApp,
  openCreateApplication
} from '../../../Redux/Application/actions';
import { clearSelectedRole, clearRoles } from '../../../Redux/Role/actions';
import { clearScopes } from '../../../Redux/Scope/actions';

const NavBarContainer = ({
  history,
  applications,
  selectedApp,
  handleGetApplications,
  handleSetSelectedApp,
  handleOpenCreateApplication
}) => {
  useEffect(() => {
    handleGetApplications();
  }, [handleGetApplications]);

  return (
    <NavBar
      applications={applications}
      selectedApp={selectedApp}
      setSelectedApp={id => handleSetSelectedApp(history, id)}
      handleOpenCreateApplication={() => handleOpenCreateApplication(history)}
    />
  );
};

NavBarContainer.propTypes = {
  history: PropTypes.object.isRequired,
  applications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  selectedApp: PropTypes.string.isRequired,
  handleGetApplications: PropTypes.func.isRequired,
  handleSetSelectedApp: PropTypes.func.isRequired,
  handleOpenCreateApplication: PropTypes.func.isRequired
};

NavBarContainer.defaultProps = {
  applications: null
};

const mapStateToProps = state => ({
  applications: state.application.applications,
  selectedApp: state.application.selectedApp
});

const mapDispatchToProps = dispatch => ({
  handleGetApplications: () => {
    dispatch(getApplications());
  },
  handleSetSelectedApp: (history, id) => {
    dispatch(clearSelectedRole());
    dispatch(setSelectedApp(id));
    history.push('/');
  },
  handleOpenCreateApplication: history => {
    dispatch(clearScopes());
    dispatch(clearRoles());
    dispatch(openCreateApplication());
    history.push('/');
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBarContainer));
