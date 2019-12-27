import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RolesView from '../RolesView/RolesView';
import { getRoles, selectRole, createRole } from '../../Redux/Role/actions';

const RolesContainer = ({
  roles,
  handleSelectRole,
  handleGetRoles,
  handleCreateRole,
  selectedApp
}) => {
  useEffect(() => {
    if (selectedApp) handleGetRoles(selectedApp);
  }, [handleGetRoles, selectedApp]);

  return (
    roles && (
      <RolesView
        roles={roles}
        selectedApp={selectedApp}
        handleSelectRole={handleSelectRole}
        handleCreateRole={handleCreateRole}
      />
    )
  );
};

RolesContainer.propTypes = {
  roles: PropTypes.array,
  handleSelectRole: PropTypes.func.isRequired,
  handleGetRoles: PropTypes.func.isRequired,
  handleCreateRole: PropTypes.func.isRequired,
  selectedApp: PropTypes.string
};

RolesContainer.defaultProps = {
  roles: null,
  selectedApp: null
};

const mapStateToProps = state => ({
  roles: state.role.roles,
  selectedApp: state.application.selectedApp
});

const mapDispatchToProps = dispatch => ({
  handleSelectRole: selectedRole => {
    dispatch(selectRole(selectedRole));
  },
  handleGetRoles: selectedApp => {
    dispatch(getRoles(selectedApp));
  },
  handleCreateRole: (roleName, selectedApp) => {
    dispatch(createRole(roleName, selectedApp));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RolesContainer);
