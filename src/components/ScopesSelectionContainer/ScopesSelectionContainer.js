import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ScopesSelectionView from '../ScopesSelectionView/ScopesSelectionView';
import { getAssignedScopes } from '../../Redux/Scope/actions';

const ScopesSelectionContainer = ({
  scopes,
  assignedScopes,
  handleGetAssignedScopes,
  selectedRole,
  selectedApp
}) => {
  useEffect(() => {
    if (selectedApp && selectedRole) {
      handleGetAssignedScopes(selectedApp, selectedRole);
    }
  }, [handleGetAssignedScopes, selectedApp, selectedRole]);

  console.log(assignedScopes);

  return assignedScopes ? (
    <ScopesSelectionView scopes={scopes} assignedScopes={assignedScopes} />
  ) : null;
};

ScopesSelectionContainer.propTypes = {
  scopes: PropTypes.array.isRequired,
  assignedScopes: PropTypes.array,
  handleGetAssignedScopes: PropTypes.func.isRequired,
  selectedRole: PropTypes.string.isRequired,
  selectedApp: PropTypes.string.isRequired
};

ScopesSelectionContainer.defaultProps = {
  assignedScopes: null
};

const mapStateToProps = state => ({
  scopes: state.scope.scopes,
  assignedScopes: state.scope.assignedScopes,
  selectedApp: state.application.selectedApp,
  selectedRole: state.role.selectedRole
});

const mapDispatchToProps = dispatch => ({
  handleGetAssignedScopes: (selectedApp, selectedRole) => {
    dispatch(getAssignedScopes(selectedApp, selectedRole));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScopesSelectionContainer);
