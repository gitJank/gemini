import axios from 'axios';
import constants from './constants';

const apiUri = process.env.REACT_APP_API_URI;

// action creators
export const recievedRoles = payload => ({
  type: constants.RECIEVED_ROLES,
  payload
});

export const selectRole = payload => ({
  type: constants.ROLE_SELECTED,
  payload
});

export const clearRoles = () => ({
  type: constants.ROLES_CLEARED
});

export const clearSelectedRole = () => ({
  type: constants.SELECTED_ROLE_CLEARED
});

export const recievedError = payload => ({
  type: constants.RECIEVED_ERROR,
  payload
});

// side effects
export const getRoles = appId => dispatch =>
  axios
    .get(`${apiUri}/roles/${appId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => dispatch(recievedRoles(res.data)))
    .catch(err => dispatch(recievedError(err)));

export const createRole = (roleName, appId) => dispatch =>
  axios
    .post(`${apiUri}/roles`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        roleName,
        appId
      }
    })
    .then(res => dispatch(recievedRoles(res.data)))
    .catch(err => dispatch(recievedError(err)));
