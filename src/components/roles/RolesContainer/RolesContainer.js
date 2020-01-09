import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RolesView from '../RolesView/RolesView';
import ScopesSelectionView from '../../scopes/ScopesSelectionView/ScopesSelectionView';
import { getRoles, selectRole, createRole } from '../../../Redux/Role/actions';
import { getScopes, getAssignedScopes } from '../../../Redux/Scope/actions';

const RolesContainer = ({
  roles,
  scopes,
  selectedApp,
  selectedRole,
  assignedScopes,
  handleSelectRole,
  handleGetRoles,
  handleGetScopes,
  handleCreateRole,
  handleGetAssignedScopes
}) => {
  useEffect(() => {
    if (selectedApp) {
      handleGetRoles(selectedApp);
      handleGetScopes(selectedApp);
    }
  }, [handleGetRoles, handleGetScopes, selectedApp]);

  useEffect(() => {
    if (selectedApp && selectedRole) {
      handleGetAssignedScopes(selectedApp, selectedRole);
    }
  }, [handleGetAssignedScopes, selectedApp, selectedRole]);

  const showRolesView = () => roles && scopes;

  const showScopesSelection = () => !!selectedRole && !!assignedScopes;

  return (
    showRolesView() && (
      <>
        <RolesView
          roles={roles}
          selectedApp={selectedApp}
          selectedRole={selectedRole}
          handleSelectRole={handleSelectRole}
          handleCreateRole={handleCreateRole}
        />
        {showScopesSelection() && (
          <ScopesSelectionView
            show={showScopesSelection()}
            scopes={scopes}
            assignedScopes={assignedScopes}
          />
        )}
      </>
    )
  );
};

RolesContainer.propTypes = {
  roles: PropTypes.array,
  handleSelectRole: PropTypes.func.isRequired,
  handleGetRoles: PropTypes.func.isRequired,
  handleGetScopes: PropTypes.func.isRequired,
  handleCreateRole: PropTypes.func.isRequired,
  selectedApp: PropTypes.string
};

RolesContainer.defaultProps = {
  roles: null,
  selectedApp: null
};

const mapStateToProps = state => ({
  roles: state.role.roles,
  scopes: state.scope.scopes,
  selectedApp: state.application.selectedApp,
  selectedRole: state.role.selectedRole,
  assignedScopes: state.scope.assignedScopes
});

const mapDispatchToProps = dispatch => ({
  handleSelectRole: selectedRole => {
    dispatch(selectRole(selectedRole));
  },
  handleGetRoles: selectedApp => {
    dispatch(getRoles(selectedApp));
  },
  handleGetScopes: selectedApp => {
    dispatch(getScopes(selectedApp));
  },
  handleCreateRole: (roleName, selectedApp) => {
    dispatch(createRole(roleName, selectedApp));
  },
  handleGetAssignedScopes: (selectedApp, selectedRole) => {
    dispatch(getAssignedScopes(selectedApp, selectedRole));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RolesContainer);
