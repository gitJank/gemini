import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ScopesView from '../ScopesView/ScopesView';
import { getScopes } from '../../Redux/Scope/actions';

const ScopesContainer = ({ scopes, handleGetScopes, selectedApp }) => {
  useEffect(() => {
    if (selectedApp) handleGetScopes(selectedApp);
  }, [handleGetScopes, selectedApp]);

  return scopes && <ScopesView scopes={scopes} />;
};

ScopesContainer.propTypes = {
  scopes: PropTypes.array,
  handleGetScopes: PropTypes.func.isRequired,
  selectedApp: PropTypes.string
};

ScopesContainer.defaultProps = {
  scopes: null,
  selectedApp: null
};

const mapStateToProps = state => ({
  scopes: state.scope.scopes,
  selectedApp: state.application.selectedApp
});

const mapDispatchToProps = dispatch => ({
  handleGetScopes: selectedApp => {
    dispatch(getScopes(selectedApp));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ScopesContainer);
