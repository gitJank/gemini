/* eslint-disable comma-dangle */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import { getApplications } from '../../Redux/Application/actions';

const NavBarContainer = ({ handleGetApplications }) => {
  useEffect(() => {
    handleGetApplications();
  }, [handleGetApplications]);

  return <NavBar />;
};

NavBarContainer.propTypes = {
  handleGetApplications: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleGetApplications: () => {
    dispatch(getApplications());
  }
});

export default connect(null, mapDispatchToProps)(NavBarContainer);
